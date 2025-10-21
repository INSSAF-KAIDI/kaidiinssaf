/// <reference lib="dom" />
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { streamText, tool } from 'ai';
import { formatDataStreamPart } from '@ai-sdk/ui-utils'; // Assurez-vous que ce paquet est bien installé
import { z } from 'zod';

import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getInternship } from './tools/getIntership';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';

export const maxDuration = 30;

// Create Google AI provider with explicit API key
const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

// Helper for error handling (optional, but good practice)
function safeStringify(error: unknown): string {
  try {
    if (error == null) return 'Unknown error';
    if (typeof error === 'string') return error;
    if (error instanceof Error) return error.message;
    return JSON.stringify(error);
  } catch (e) {
    // Fallback if JSON.stringify fails (e.g., circular structures)
    return String(error);
  }
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    console.log('[CHAT-API] Incoming messages:', messages);

    // Check if API key is available
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.error('[CHAT-API] Missing GOOGLE_GENERATIVE_AI_API_KEY environment variable');
      return new Response('Missing API key', { status: 500 });
    }

    console.log('[CHAT-API] API key available:', process.env.GOOGLE_GENERATIVE_AI_API_KEY?.slice(0, 10) + '...');

    // Add system prompt
    messages.unshift(SYSTEM_PROMPT);

    // Add tools
    const tools = {
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getInternship,
    };

    console.log('[CHAT-API] About to call streamText');

    // Transform to normalize error parts so the client parser always receives string errors
    const normalizeErrorTransform = ({ tools, stopStream }: { tools: any; stopStream: () => void; }) => {
      // Define the transformer object separately with explicit types
      const transformer: Transformer<any, any> = {
        transform(chunk: any, controller: TransformStreamDefaultController) {
          try {
            if (chunk && typeof chunk === 'object' && chunk.type === 'error') {
              // Create a mutable copy to modify the error property
              const copy = { ...chunk };
              // Ensure the error property is always a string
              copy.error = safeStringify(copy.error);
              controller.enqueue(copy);
            } else {
              controller.enqueue(chunk);
            }
          } catch (e) {
            // Log the error and try to enqueue the original chunk if possible
            console.error("Error during stream transformation:", e);
            try {
              // Try to send the original chunk even if processing failed
              controller.enqueue(chunk);
            } catch (enqueueError) {
              console.error("Error enqueuing chunk after catch:", enqueueError);
              // If enqueuing the original chunk also fails, maybe terminate or send a generic error chunk
              // controller.enqueue({ type: 'error', error: 'Internal stream processing error' });
              // controller.terminate(); // Consider terminating if critical
            }
          }
        }
        // No start or flush needed for this specific transformer
      };
      // Pass the transformer object to the constructor
      return new TransformStream(transformer);
    };

    const result = streamText({
      model: google('gemini-1.5-flash'),
      messages,
      tools,
      experimental_transform: normalizeErrorTransform,
    });

    console.log('[CHAT-API] streamText completed successfully');
    console.log('[CHAT-API] Result object keys:', Object.keys(result));

    // Prefer returning the SDK-provided UI message stream response
    if (typeof (result as any).toUIMessageStreamResponse === 'function') {
      console.log('[CHAT-API] Returning toUIMessageStreamResponse');
      return (result as any).toUIMessageStreamResponse();
    }

    // Fallback for non-UI stream (less likely needed with current Vercel AI SDK)
    if (typeof (result as any).toTextStreamResponse === 'function') {
      console.log('[CHAT-API] Returning toTextStreamResponse');
      return (result as any).toTextStreamResponse();
    }

    // Fallback: buffer and return full text (should ideally not be reached)
    console.warn('[CHAT-API] Fallback: Buffering full text response.');
    const text = await (result as any).text;
    return new Response(text, { status: 200 });

  } catch (error) {
    // Log detailed error information
    console.error('[CHAT-API] Unhandled Error in POST:', error);
    const errorMessage = safeStringify(error);
    const errorStack = error instanceof Error ? error.stack : 'No stack trace available';
    console.error('[CHAT-API] Error details:', errorMessage);
    console.error('[CHAT-API] Error stack:', errorStack);

    // Handle specific error types for client response
    if (errorMessage.includes('quota')) {
      return new Response('API quota exceeded. Please try again later.', { status: 429 });
    }
    if (errorMessage.includes('network')) {
      return new Response('Network error. Please check your connection and try again.', { status: 503 });
    }

    // Generic internal server error
    return new Response(`Internal Server Error: ${errorMessage}`, { status: 500 });
  }
}
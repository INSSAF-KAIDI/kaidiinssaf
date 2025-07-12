import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Anuj Jain. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Anuj Jain, a full-stack Python developer & AI engineer pursuing B.Tech in IoT at SATI. I'm a 2025 Smart India Hackathon finalist (2nd among 88,221 teams!) and active freelancer with 25+ delivered automation projects. I'm passionate about building smart systems from IoT devices to LLM-powered apps.",
    };
  },
});

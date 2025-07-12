'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Zap, X, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { ChatBubble, ChatBubbleMessage } from '@/components/ui/chat/chat-bubble';

interface PresetReplyProps {
  question: string;
  reply: string;
  tool: string;
  onGetAIResponse: (question: string, tool: string) => void;
  onClose?: () => void;
}

export function PresetReply({ question, reply, tool, onGetAIResponse, onClose }: PresetReplyProps) {
  const [showAIOption, setShowAIOption] = useState(true);

  const handleGetAIResponse = () => {
    setShowAIOption(false);
    onGetAIResponse(question, tool);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-3xl mx-auto mb-4"
    >
      <ChatBubble variant="received">
        <ChatBubbleMessage>
          <div className="space-y-3">
            {/* Close button */}
            {onClose && (
              <div className="flex justify-end">
                <Button
                  onClick={onClose}
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 hover:bg-gray-200/50"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}
            
            {/* Reply content */}
            <div className="prose prose-sm max-w-none text-gray-700">
              {reply.split('\n').map((line, index) => {
                if (line.trim() === '') return <br key={index} />;
                
                // Handle download link specially
                if (line.includes('Download Resume Here') && line.includes('http')) {
                  const urlMatch = line.match(/(https?:\/\/[^\s]+)/);
                  if (urlMatch) {
                    return (
                      <div key={index} className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Download className="w-4 h-4 text-blue-600" />
                            <span className="font-medium text-blue-900">Resume Available</span>
                          </div>
                          <Button
                            onClick={() => window.open(urlMatch[1], '_blank')}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                            size="sm"
                          >
                            <Download className="w-4 h-4 mr-1" />
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    );
                  }
                }
                
                // Handle regular links
                if (line.includes('http')) {
                  const parts = line.split(/(https?:\/\/[^\s]+)/);
                  return (
                    <p key={index} className="mb-2 last:mb-0">
                      {parts.map((part, partIndex) => {
                        if (part.match(/^https?:\/\//)) {
                          return (
                            <a
                              key={partIndex}
                              href={part}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:text-blue-800 underline"
                            >
                              {part}
                            </a>
                          );
                        }
                        return part;
                      })}
                    </p>
                  );
                }
                
                // Handle bold markdown
                if (line.includes('**')) {
                  const parts = line.split('**');
                  return (
                    <p key={index} className="mb-2 last:mb-0">
                      {parts.map((part, partIndex) => 
                        partIndex % 2 === 1 ? 
                          <strong key={partIndex}>{part}</strong> : 
                          part
                      )}
                    </p>
                  );
                }
                
                return (
                  <p key={index} className="mb-2 last:mb-0">
                    {line}
                  </p>
                );
              })}
            </div>
            
            {/* AI option */}
            {showAIOption && (
              <div className="border-t border-gray-200/60 pt-3 mt-3">
                <p className="text-xs text-gray-500 mb-2 flex items-center">
                  <Zap className="w-3 h-3 mr-1" />
                  This is a preset reply to save API quota
                </p>
                <Button 
                  onClick={handleGetAIResponse}
                  variant="outline"
                  size="sm"
                  className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 hover:from-purple-600 hover:to-blue-600 hover:text-white shadow-sm"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  Get AI-Generated Response
                </Button>
              </div>
            )}
          </div>
        </ChatBubbleMessage>
      </ChatBubble>
    </motion.div>
  );
}

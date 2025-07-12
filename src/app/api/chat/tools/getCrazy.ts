import { tool } from 'ai';
import { z } from 'zod';

export const getCrazy = tool({
  description:
    'This tool shows crazy and fun things about Anuj Jain, his hobbies and interesting experiences.',
  parameters: z.object({}),
  execute: async () => {
    return {
      crazy: [
        {
          title: "Smart India Hackathon National Finalist",
          description: "Reached 2nd position among 88,221+ teams nationwide - talk about beating the odds! 🎯",
          impact: "Built hideFlare for MP Police to detect CDN obfuscation with 92% accuracy"
        },
        {
          title: "IoT Chess Wizard",
          description: "Built a smart chessboard that costs 1/8th of commercial versions but works better! ♟️",
          impact: "98.2% move detection accuracy with ESP32 and custom multiplexers"
        },
        {
          title: "Freelance Automation Ninja",
          description: "25+ Python automation projects delivered - I make boring tasks disappear! 🤖",
          impact: "Reduced manual work by 60% for clients on Fiverr"
        }
      ],
      fun_facts: [
        "I can make machines talk to each other (IoT specialist) 🤝",
        "My code has traveled from IoT devices to LLM-powered apps 🚀",
        "I turn coffee into Python scripts and dreams into working prototypes ☕",
        "HDFC scholarship recipient - they believe in my crazy ideas too! 💡"
      ],
      summary: "I'm the guy who builds impossible things and makes them work. From smart chessboards to national hackathon victories - I love turning wild ideas into reality! 🔥"
    };
  },
});

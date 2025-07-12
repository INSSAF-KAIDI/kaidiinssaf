import { tool } from 'ai';
import { z } from 'zod';

export const getSport = tool({
  description:
    'This tool shows information about Anuj Jain\'s sports and physical activities, fitness interests.',
  parameters: z.object({}),
  execute: async () => {
    return {
      sports_activities: [
        {
          type: "Competitive Programming",
          description: "Athletic coding on LeetCode and programming contests",
          achievement: "Solved 150+ problems across different platforms",
          current_status: "Active problem solver"
        },
        {
          type: "Mental Athletics", 
          description: "Chess (both digital and physical board building!)",
          achievement: "Built an IoT smart chessboard with 98.2% accuracy",
          current_status: "Strategic thinking applied to both games and code"
        },
        {
          type: "Hackathon Marathons",
          description: "High-intensity coding competitions",
          achievement: "National finalist in Smart India Hackathon (2nd among 88,221+ teams)",
          current_status: "Always ready for the next challenge"
        }
      ],
      fitness_philosophy: "I believe in exercising both the mind and body. While I spend hours coding, I make sure to stay mentally sharp through problem-solving challenges and strategic thinking.",
      current_activities: [
        "Daily coding practice (like mental cardio)",
        "Chess strategy sessions",
        "IoT project building (surprisingly physical work!)",
        "Walking meetings and coding breaks"
      ],
      summary: "My sports are mostly mental athletics - competitive programming, hackathons, and strategic games. I treat coding like a sport and approach every project with an athlete's mindset! 🧠💪"
    };
  },
});

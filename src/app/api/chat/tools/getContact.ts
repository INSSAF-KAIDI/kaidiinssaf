import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool shows Anuj Jain\'s contact information.',
  parameters: z.object({}),
  execute: async () => {
    return {
      contact: {
        email: "anujjainbatu@gmail.com",
        phone: "+91 8305117236",
        location: "India"
      },
      socialProfiles: {
        github: "https://github.com/anujjainbatu",
        linkedin: "https://linkedin.com/in/anujjainbatu",
        twitter: "https://x.com/anujainbatu",
        kaggle: "https://www.kaggle.com/anujjainbatu",
        leetcode: "https://leetcode.com/u/anujjainbatu/"
      },
      message: "Here's my contact information! Feel free to reach out - I'm always excited to discuss new projects, collaborations, or just chat about tech! �"
    };
  },
});

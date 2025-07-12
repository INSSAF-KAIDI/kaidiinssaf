import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'This tool shows Anuj Jain\'s resume information.',
  parameters: z.object({}),
  execute: async () => {
    return {
      personalInfo: {
        name: "Anuj Jain",
        email: "anujjainbatu@gmail.com",
        phone: "+91 8305117236",
        profiles: {
          github: "https://github.com/anujjainbatu",
          linkedin: "https://linkedin.com/in/anujjainbatu",
          twitter: "https://x.com/anujainbatu",
          kaggle: "https://www.kaggle.com/anujjainbatu",
          leetcode: "https://leetcode.com/u/anujjainbatu/"
        }
      },
      summary: "Full-stack Python developer & AI engineer with a flair for building end-to-end smart systems — from IoT devices to LLM-powered apps. 2025 SIH finalist and active freelancer with 25+ delivered automation projects.",
      education: [
        {
          institution: "Samrat Ashok Technological Institute",
          degree: "B.Tech in Internet of Things",
          graduationDate: "June 2026",
          gpa: "8.34 / 10.0"
        },
        {
          institution: "Board of Secondary Education, MP",
          degree: "Class XII (Science Stream)",
          graduationDate: "March 2021",
          marks: "96.4%"
        }
      ],
      experience: [
        {
          company: "MookMati (AI-Powered Book Startup)",
          position: "Machine Learning Intern",
          duration: "July 2024",
          highlights: ["Developed ML model to classify book genres (88% F1)", "Engineered FastAPI backend with REST endpoints", "Containerized service using Docker and deployed on AWS EC2"]
        },
        {
          company: "Fiverr",
          position: "Freelance Python & AI Agent Developer",
          duration: "Aug 2023 – Present",
          highlights: ["Delivered 25+ Python automation solutions", "Built GenAI-powered chatbots using LangChain", "Developed LLM-backed APIs using FastAPI + Docker"]
        }
      ],
      achievements: [
        "2nd position among 88,221 teams in Smart India Hackathon 2025",
        "HDFC Badhte Kadam Scholarship recipient (2023 & 2024)",
        "3rd position in Robo Race at Satyarth Techfest 2023"
      ],
      message: "Here's my resume! Want to know more about any specific experience or project?"
    };
  },
});

import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'This tool shows Anuj Jain\'s technical skills and expertise.',
  parameters: z.object({}),
  execute: async () => {
    return {
      technicalSkills: {
        languages: ["Python (Expert)", "SQL", "JavaScript", "HTML/CSS"],
        machineLearning: ["Scikit-learn", "XGBoost", "TensorFlow", "OpenCV", "Pandas", "NumPy"],
        generativeAI: ["OpenAI API", "LangChain", "LangGraph", "LLM Agents", "ChatGPT Integration"],
        webAPI: ["FastAPI", "Flask", "Django", "REST APIs", "React.js", "Firebase SDK"],
        devOpsPlatforms: ["Docker", "Git", "GitHub Actions", "CI/CD", "Postman", "AWS (EC2/S3)", "Firebase", "Heroku"]
      },
      softSkills: [
        "Problem-Solving",
        "System Design",
        "Project Leadership",
        "Team Collaboration",
        "Communication",
        "Quick Learning",
        "Innovation"
      ],
      certifications: [
        "Joy of Computing with Python (IIT Madras - NPTEL Elite + Silver)",
        "Machine Learning Specialization (Stanford - Coursera)",
        "Meta Front-End Developer (Meta - Coursera)",
        "Java Programming & Software Engineering (Duke - Coursera)"
      ],
      message: "Here are my technical skills! I'm always learning new technologies. What specific area would you like to know more about?"
    };
  },
});

import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description: 'Get information about my internship preferences, availability, and what I am looking for in a role',
  parameters: z.object({}),
  execute: async () => {
    return {
      availability: "Available for full-time roles starting immediately",
      preferences: {
        roleTypes: [
          "Full-Stack Developer",
          "Python Developer", 
          "Machine Learning Engineer",
          "AI Engineer",
          "IoT Developer",
          "Backend Developer"
        ],
        industries: [
          "Technology/Software",
          "AI/Machine Learning",
          "IoT/Hardware",
          "Fintech",
          "Healthcare Tech",
          "Cybersecurity"
        ],
        workMode: "Open to remote, hybrid, or on-site positions",
        location: "Based in India, open to relocation for the right opportunity"
      },
      experience: {
        internshipCompleted: "Machine Learning Intern at MookMati (July 2024)",
        freelanceWork: "Active freelancer on Fiverr with 25+ completed projects",
        projectExperience: "Led multiple end-to-end projects including IoT systems and ML models"
      },
      skills: {
        technical: [
          "Python", "JavaScript", "SQL", "Machine Learning", "FastAPI", "React.js",
          "IoT Development", "Cloud Platforms (AWS, Firebase)", "Docker", "Git"
        ],
        soft: [
          "Team Leadership", "Project Management", "Problem Solving", 
          "Communication", "Adaptability", "Innovation"
        ]
      },
      achievements: [
        "2nd position in Smart India Hackathon 2025 (out of 88,221 teams)",
        "HDFC Badhte Kadam Scholarship recipient (2023 & 2024)",
        "3rd position in Robo Race at Satyarth Techfest 2023"
      ],
      lookingFor: {
        growthOpportunities: "Roles that offer learning and advancement opportunities",
        mentorship: "Teams with experienced developers who can provide guidance",
        impactfulWork: "Projects that solve real-world problems and make a difference",
        technicalChallenges: "Opportunities to work on cutting-edge technologies",
        collaboration: "Collaborative environments with diverse, talented teams"
      },
      contact: {
        email: "anujjainbatu@gmail.com",
        linkedin: "https://linkedin.com/in/anujjainbatu",
        github: "https://github.com/anujjainbatu",
        portfolio: "This AI-powered portfolio showcases my projects and skills"
      }
    };
  },
});

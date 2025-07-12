
import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Anuj Jain",
  parameters: z.object({}),
  execute: async () => {
    return {
      projects: [
        {
          title: "Low-Cost Smart Chessboard with Cloud Integration",
          type: "IoT Hardware/Software System",
          date: "May 2025",
          description: "Built an IoT-enabled chessboard using ESP32, multiplexers, and 64 reed switches with 98.2% move detection accuracy at 1/8th commercial cost. Implemented Firebase cloud logging, a React dashboard, and Stockfish integration. Led a 3-member team through end-to-end development (PCB prototyping, firmware, testing with 20+ users); optimized chess logic in Python and sensor polling, reducing power consumption by 40%.",
          techStack: ["ESP32", "Python", "React", "Firebase", "Stockfish", "IoT"],
          highlights: ["98.2% accuracy", "1/8th commercial cost", "40% power optimization"]
        },
        {
          title: "hideFlare: CDN Obfuscation Detection System",
          type: "Smart India Hackathon 2024 Finalist (MP Police)",
          date: "January 2025",
          description: "Selected as one of the top 5 national teams (out of 88,000+) to build a cybersecurity tool for MP Police. Analyzed 2,000+ suspicious domains using a 6-layer detection system with DNS forensics, TLS fingerprinting, and ML (XGBoost) — achieving 92% accuracy. Developed a Flask + Scikit-learn backend processing 50+ features (ASN, WHOIS, HTTP headers); deployed via Docker in cyber labs.",
          techStack: ["Python", "Flask", "Scikit-learn", "XGBoost", "Docker", "DNS Forensics", "TLS"],
          highlights: ["92% accuracy", "Top 5 national team", "37% false positive reduction"]
        }
      ],
      summary: "Here are my major projects! I love building end-to-end solutions that combine IoT, AI, and automation. Want to know more about any specific project or see my other work?"
    };
  },
});
'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface InternshipData {
  availability: string;
  preferences: {
    roleTypes: string[];
    industries: string[];
    workMode: string;
    location: string;
  };
  experience: {
    internshipCompleted: string;
    freelanceWork: string;
    projectExperience: string;
  };
  skills: {
    technical: string[];
    soft: string[];
  };
  achievements: string[];
  lookingFor: {
    growthOpportunities: string;
    mentorship: string;
    impactfulWork: string;
    technicalChallenges: string;
    collaboration: string;
  };
  contact: {
    email: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
}

interface InternshipCardProps {
  data?: InternshipData;
}

const InternshipCard = ({ data }: InternshipCardProps) => {
  const openMail = () => {
    window.open(`mailto:${data?.contact.email || 'anujjainbatu@gmail.com'}`, '_blank');
  };
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="/avatar.png"
              alt="Anuj's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Anuj Jain
            </h2>
            <p className="text-muted-foreground text-sm">
              Job Application
            </p>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Live
          </span>
        </div>
      </div>

      {/* Internship Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Duration</p>
            <p className="text-muted-foreground text-sm">
              {data?.availability || "Available for full-time roles starting immediately"}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Location</p>
            <p className="text-muted-foreground text-sm">
              {data?.preferences.location || "Based in India, open to relocation for the right opportunity 🇮🇳"}
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Tech stack</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="decoration-none list-disc pl-4">
                {data?.skills.technical.slice(0, 4).map((skill, index) => (
                  <li key={index}>{skill}</li>
                )) || (
                  <>
                    <li>Python, SQL, JavaScript, HTML/CSS</li>
                    <li>FastAPI, Flask, Django, React.js</li>
                    <li>Scikit-learn, XGBoost, TensorFlow, OpenCV</li>
                    <li>OpenAI API, LangChain, LangGraph</li>
                  </>
                )}
              </ul>
              <ul className="list-disc pl-4">
                {data?.skills.technical.slice(4, 8).map((skill, index) => (
                  <li key={index}>{skill}</li>
                )) || (
                  <>
                    <li>Docker, Git, GitHub Actions, AWS</li>
                    <li>Firebase, Heroku, ESP32, IoT</li>
                    <li>Machine Learning, AI Agents</li>
                    <li>Web Scraping, Automation</li>
                  </>
                )}
                <li>
                  <a
                    href="/?query=What%20are%20your%20skills%3F%20Give%20me%20a%20list%20of%20your%20soft%20and%20hard%20skills."
                    className="cursor-pointer items-center text-blue-500 underline"
                  >
                    See more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          What I bring
        </p>
        <p className="text-foreground text-sm">
          {data?.experience.internshipCompleted || "Real-world ML experience from MookMati (Genre classification, FastAPI deployment, AWS)."} <br /> 
          {data?.achievements[0] || "2nd position in Smart India Hackathon 2025 among 88,221 teams with hideFlare cybersecurity tool."} <br /> 
          {data?.experience.freelanceWork || "25+ freelance automation projects delivered on Fiverr, cutting manual work by 60%."}
        </p>
      </div>

      {/* Goal */}
      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">Goal</p>
        <p className="text-foreground text-sm">
          {data?.lookingFor.growthOpportunities || "Looking for roles that offer learning and advancement opportunities with experienced teams."} I want to work on {data?.lookingFor.technicalChallenges || "cutting-edge technologies"} that {data?.lookingFor.impactfulWork || "solve real-world problems and make a meaningful impact"}. I'm passionate, adaptable, and ready to contribute to {data?.lookingFor.collaboration || "collaborative, innovative environments"}! 🚀
        </p>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Contact me
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;

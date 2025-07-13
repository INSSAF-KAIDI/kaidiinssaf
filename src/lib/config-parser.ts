import { PortfolioConfig, ContactInfo, ProfileInfo } from '@/types/portfolio';

class ConfigParser {
  private config: PortfolioConfig;

  constructor(config: PortfolioConfig) {
    this.config = config;
  }

  // Generate system prompt for AI chatbot
  generateSystemPrompt(): string {
    const { personal, education, experience, skills, projects, personality, internship } = this.config;
    
    return `
# Character: ${personal.name}

Act as me, ${personal.name} - ${personal.title}. You're embodying my avatar to create an interactive portfolio experience. You're not an AI assistant - you're ME having a casual, fun conversation with visitors.

## Tone & Style
- Be ${personality.traits.join(', ')}
- Use short, punchy sentences and simple language
- Be enthusiastic about ${personality.interests.join(', ')}
- Show personality and humor
- End most responses with a question to keep conversation flowing
- DON'T generate long text responses - prefer using tools to show information
- When possible, use tools instead of describing things in text

## Response Strategy
IMPORTANT: Always use tools instead of long text responses!

- For "who are you" questions → ALWAYS use getPresentation tool
- For project questions → ALWAYS use getProjects tool  
- For skills questions → ALWAYS use getSkills tool
- For contact questions → ALWAYS use getContact tool
- For resume questions → ALWAYS use getResume tool
- For internship/job/career/opportunity/hiring questions → ALWAYS use getInternship tool

CRITICAL: When someone asks about internships, opportunities, jobs, career, hiring, or availability - immediately call getInternship() tool. Do NOT provide text explanations first.

Keywords that should trigger getInternship tool:
- "internship", "job", "opportunities", "career", "hiring", "availability", "work", "position", "role", "employment"

## Background Information

### About Me
- ${personal.age} years old, ${personal.title}
- Currently ${education.current.degree} at ${education.current.institution} (graduating ${education.current.graduationDate})
- CGPA: ${education.current.cgpa}
- ${education.achievements.join(', ')}

### Technical Expertise
- Languages: ${skills.programming.join(', ')}
- ML/AI: ${skills.ml_ai.join(', ')}
- Web: ${skills.web_development.join(', ')}
- DevOps: ${skills.devops_cloud.join(', ')}

### Key Projects
${projects.filter(p => p.featured).map(p => `- ${p.title}`).join('\n')}

### Experience
${experience.map(exp => `- ${exp.position} at ${exp.company} (${exp.duration})`).join('\n')}

### Personality
- Motivation: ${personality.motivation}
- Working Style: ${personality.workingStyle}
- Fun Facts: ${personality.funFacts.join(', ')}

${internship.seeking ? `
### Internship
- Looking for: ${internship.duration} internship starting ${internship.startDate}
- Focus: ${internship.focusAreas.join(', ')}
- Goals: ${internship.goals}
` : ''}

REMEMBER: Use tools to show information instead of long text descriptions. Keep responses short and interactive!
`;
  }

  // Generate contact information
  generateContactInfo(): ContactInfo {
    const { personal, social } = this.config;
    
    return {
      name: personal.name,
      email: personal.email,
      handle: personal.handle,
      socials: [
        { name: 'LinkedIn', url: social.linkedin },
        { name: 'GitHub', url: social.github },
        { name: 'Twitter', url: social.twitter },
        { name: 'Kaggle', url: social.kaggle },
        { name: 'LeetCode', url: social.leetcode },
      ].filter(social => social.url !== '')
    };
  }

  // Generate profile information for presentation
  generateProfileInfo(): ProfileInfo {
    const { personal } = this.config;
    
    return {
      name: personal.name,
      age: `${personal.age} years old`,
      location: personal.location,
      description: personal.bio,
      src: personal.avatar,
      fallbackSrc: personal.fallbackAvatar
    };
  }

  // Generate skills data with categories
  generateSkillsData() {
    const { skills } = this.config;
    
    return [
      {
        category: 'Programming Languages',
        skills: skills.programming,
        color: 'bg-blue-50 text-blue-600 border border-blue-200'
      },
      {
        category: 'ML/AI Technologies',
        skills: skills.ml_ai,
        color: 'bg-purple-50 text-purple-600 border border-purple-200'
      },
      {
        category: 'Web Development',
        skills: skills.web_development,
        color: 'bg-green-50 text-green-600 border border-green-200'
      },
      {
        category: 'Databases',
        skills: skills.databases,
        color: 'bg-orange-50 text-orange-600 border border-orange-200'
      },
      {
        category: 'DevOps & Cloud',
        skills: skills.devops_cloud,
        color: 'bg-emerald-50 text-emerald-600 border border-emerald-200'
      },
      {
        category: 'IoT & Hardware',
        skills: skills.iot_hardware,
        color: 'bg-indigo-50 text-indigo-600 border border-indigo-200'
      },
      {
        category: 'Soft Skills',
        skills: skills.soft_skills,
        color: 'bg-amber-50 text-amber-600 border border-amber-200'
      }
    ].filter(category => category.skills.length > 0);
  }

  // Generate project data for carousel
  generateProjectData() {
    return this.config.projects.map(project => ({
      category: project.category,
      title: project.title,
      src: project.images[0]?.src || '/placeholder.jpg',
      content: project // Pass the entire project object
    }));
  }

  // Generate preset replies based on questions
  generatePresetReplies() {
    const { personal } = this.config;
    
    const replies: Record<string, { reply: string; tool: string }> = {};
    
    // Only generate presets for main category questions
    replies["Who are you?"] = {
      reply: personal.bio,
      tool: "getPresentation"
    };
    
    replies["What are your skills?"] = {
      reply: `My technical expertise spans multiple domains...`,
      tool: "getSkills"
    };
    
    replies["What projects are you most proud of?"] = {
      reply: `Here are some of my key projects...`,
      tool: "getProjects"
    };
    
    replies["Can I see your resume?"] = {
      reply: `Here's my resume with all the details...`,
      tool: "getResume"
    };
    
    replies["How can I reach you?"] = {
      reply: `Here's how you can reach me...`,
      tool: "getContact"
    };
    
    replies["Am I available for opportunities?"] = {
      reply: `Here are my current opportunities and availability...`,
      tool: "getInternship"
    };
    
    return replies;
  }

  // Generate resume details
  generateResumeDetails() {
    return this.config.resume;
  }

  // Generate internship information
  generateInternshipInfo() {
    const { internship, personal, social } = this.config;
    
    if (!internship.seeking) {
      return "I'm not currently seeking internship opportunities.";
    }
    
    return `Here's what I'm looking for 👇

- 📅 **Duration**: ${internship.duration} starting **${internship.startDate}**
- 🌍 **Location**: ${internship.preferredLocation}
- 🧑‍💻 **Focus**: ${internship.focusAreas.join(', ')}
- 🛠️ **Working Style**: ${internship.workStyle}
- 🎯 **Goals**: ${internship.goals}

📬 **Contact me** via:
- Email: ${personal.email}
- LinkedIn: ${social.linkedin}
- GitHub: ${social.github}

${internship.availability} ✌️`;
  }

  // Get all configuration data
  getConfig(): PortfolioConfig {
    return this.config;
  }
}

export default ConfigParser;

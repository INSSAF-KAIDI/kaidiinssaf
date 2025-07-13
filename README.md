# 🤖 AI-Powered Portfolio with Single JSON Configuration

A **revolutionary portfolio system** that allows complete customization through a single JSON file. Perfect for developers who want a professional AI-powered portfolio without touching any code.

[![Demo](https://img.shields.io/badge/Demo-Live%20Site-brightgreen)](your-demo-url)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue)](https://www.typescriptlang.org/)

## 🎯 Why This Portfolio System?

### Traditional Portfolio Problems ❌
- Edit 10+ files for simple changes
- Risk breaking functionality 
- Need to understand complex codebase
- Hours of work for basic updates

### Our Solution ✅
- **Edit 1 JSON file** - Everything updates automatically
- **Zero code knowledge** required
- **AI-powered chat** that knows all about you
- **Modern, responsive design** out of the box

## 🚀 Quick Start (5 Minutes Setup)

### For Third-Party Developers

1. **Fork this repository**
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or 
   yarn install
   ```

3. **Edit the configuration**
   ```bash
   # Edit portfolio-config.json with your information
   nano portfolio-config.json
   ```

4. **Add your images**
   ```bash
   # Replace these files in /public/ folder:
   public/profile.jpeg      # Your profile picture
   public/avatar.png        # Chat avatar (optional)
   public/project-1.jpg     # Project screenshots
   public/project-2.jpg     # Add as many as needed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

6. **Deploy to production**
   ```bash
   npm run build
   # Deploy to Vercel, Netlify, or any hosting service
   ```

## 🤖 AI-Powered JSON Generation

### Method 1: Use Claude/ChatGPT

Upload these files to Claude or ChatGPT:
1. **Your current resume (PDF/DOC)**
2. **The sample `portfolio-config.json`**

**Prompt to use:**
```
I want to create a portfolio using this JSON configuration system. 

Here's the sample JSON structure: [paste portfolio-config.json]
Here's my resume: [upload your resume]

Please generate a complete portfolio-config.json file for me with:
1. My personal information from the resume
2. All my skills and technologies 
3. My work experience and projects
4. Appropriate preset questions for an AI chat
5. Professional personality traits

Also tell me what image files I need to prepare and their recommended sizes.
```

### Method 2: Manual Editing

Edit `portfolio-config.json` sections:

```json
{
  "personal": {
    "name": "Your Full Name",
    "title": "Your Professional Title",
    "email": "your.email@example.com",
    "bio": "Brief description about yourself..."
  },
  "skills": {
    "programming": ["JavaScript", "Python", "Java"],
    "web_development": ["React", "Node.js", "MongoDB"]
  },
  "projects": [
    {
      "title": "Your Amazing Project",
      "description": "What this project does...",
      "techStack": ["React", "TypeScript", "Firebase"],
      "githubUrl": "https://github.com/you/project",
      "liveUrl": "https://your-project.com",
      "images": [{"src": "/project-1.jpg", "alt": "Project screenshot"}]
    }
  ]
}
```

## 📁 File Structure & What Each File Does

```
portfolio/
├── 📄 portfolio-config.json          # 🎯 MAIN CONFIG - Edit this file only!
├── 📁 public/                        # 🖼️ Your images and assets
│   ├── profile.jpeg                  # Your main profile picture
│   ├── avatar.png                    # Chat bot avatar (optional)
│   ├── favicon.ico                   # Website icon
│   └── project-*.jpg                 # Project screenshots
├── 📁 src/
│   ├── 📁 app/
│   │   ├── layout.tsx                # Main app layout
│   │   ├── page.tsx                  # Home page component
│   │   ├── globals.css               # Global styles
│   │   └── 📁 api/chat/              # AI chat system
│   │       ├── route.ts              # Chat API endpoint
│   │       └── 📁 tools/             # AI tools for different sections
│   │           ├── getPresentation.ts # "Who are you?" tool
│   │           ├── getProjects.ts    # Projects display tool
│   │           ├── getSkills.ts      # Skills display tool
│   │           ├── getContact.ts     # Contact info tool
│   │           ├── getResume.ts      # Resume display tool
│   │           └── getIntership.ts   # Availability/opportunities tool
│   ├── 📁 components/                # React UI components
│   │   ├── presentation.tsx          # About/bio section
│   │   ├── skills.tsx                # Skills grid display
│   │   ├── contact.tsx               # Contact information
│   │   ├── resume.tsx                # Resume viewer
│   │   ├── AvailabilityCard.tsx      # Job availability card
│   │   ├── theme-provider.tsx        # Dark/light mode
│   │   ├── 📁 projects/              # Project-related components
│   │   │   ├── AllProjects.tsx       # Projects grid
│   │   │   ├── ConfigData.tsx        # Project data from config
│   │   │   └── apple-cards-carousel.tsx # Interactive project carousel
│   │   ├── 📁 chat/                  # AI chat system
│   │   │   ├── chat.tsx              # Main chat interface
│   │   │   ├── chat-landing.tsx      # Welcome screen with buttons
│   │   │   ├── HelperBoost.tsx       # Quick questions drawer
│   │   │   ├── preset-reply.tsx      # Preset responses
│   │   │   ├── simple-chat-view.tsx  # AI responses
│   │   │   └── tool-renderer.tsx     # Renders different components
│   │   └── 📁 ui/                    # Reusable UI components
│   ├── 📁 lib/
│   │   ├── config-loader.ts          # 🔧 Loads JSON configuration
│   │   ├── config-parser.ts          # 🔧 Transforms JSON to components
│   │   └── utils.ts                  # Utility functions
│   ├── 📁 types/
│   │   └── portfolio.ts              # 🔧 TypeScript type definitions
│   └── 📁 hooks/                     # React custom hooks
├── 📄 package.json                   # Dependencies and scripts
├── 📄 next.config.ts                 # Next.js configuration
├── 📄 tailwind.config.ts             # Styling configuration
├── 📄 tsconfig.json                  # TypeScript configuration
└── 📄 components.json                # UI components configuration
```

## 🎨 Images You Need to Prepare

### Required Images:
1. **Profile Picture** (`public/profile.jpeg`)
   - **Size**: 400x400px minimum
   - **Format**: JPEG/PNG
   - **Use**: Main profile photo, chat avatar

2. **Project Screenshots** (`public/project-1.jpg`, `public/project-2.jpg`, etc.)
   - **Size**: 1200x800px recommended
   - **Format**: JPEG/PNG/WebP
   - **Use**: Project portfolio carousel

3. **Favicon** (`public/favicon.ico`) - Optional
   - **Size**: 32x32px
   - **Format**: ICO/PNG
   - **Use**: Browser tab icon

### Image Optimization Tips:
- Use tools like [TinyPNG](https://tinypng.com/) to compress images
- Keep file sizes under 1MB for better performance
- Use descriptive filenames (e.g., `ecommerce-project.jpg`)

## 🤖 AI Chat System Configuration

The AI chatbot is configured through your JSON file:

```json
{
  "chatbot": {
    "name": "Your Digital Twin",
    "personality": "Professional yet friendly",
    "tone": "Conversational and helpful",
    "responseStyle": "Concise with personality"
  },
  "presetQuestions": {
    "me": ["Who are you?", "Tell me about yourself"],
    "professional": ["What are your skills?", "Can I see your resume?"],
    "projects": ["What projects are you most proud of?"],
    "contact": ["How can I reach you?"]
  }
}
```

## 🔧 Environment Variables

Create `.env.local` file:
```env
# Required for AI chat functionality
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key

## 🧪 Testing Your Configuration

Validate your JSON before deployment:
```bash
# Check JSON syntax
node -e "console.log('Valid JSON:', !!JSON.parse(require('fs').readFileSync('portfolio-config.json')))"

# Run type checking
npm run type-check

# Test build
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Common Issues:

**Q: AI chat not working?**
A: Check your `GOOGLE_GENERATIVE_AI_API_KEY` in `.env.local`

**Q: Images not showing?**
A: Ensure images are in `/public/` folder and paths in JSON match filenames

**Q: Build failing?**
A: Run `npm run type-check` to validate your JSON configuration

**Q: Want to add new features?**
A: Most customization can be done through JSON. For advanced features, modify the components.

### Get Help:
- 🐛 [Open an Issue](https://github.com/anujjainbatu/portfolio/issues)
- 📧 Email: anujjainbatu@gmail.com

## 🌟 Showcase

**Want to be featured?** Share your portfolio built with this system!

---

**Made with ❤️ for developers by developers**

Transform your career with a professional AI-powered portfolio that takes minutes to set up and zero code to maintain.

import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Low-Cost Smart Chessboard with Cloud Integration',
    description:
      'Built an IoT-enabled chessboard using ESP32, multiplexers, and 64 reed switches with 98.2% move detection accuracy at 1/8th commercial cost. Features Firebase cloud logging, React dashboard, and Stockfish integration. Led a 3-member team through end-to-end development including PCB prototyping, firmware, and testing with 20+ users.',
    techStack: [
      'ESP32',
      'Python',
      'React.js',
      'Firebase',
      'Stockfish',
      'PCB Design',
      'IoT',
      'Cloud Integration',
      'Hardware Development'
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/anujjainbatu',
      },
      {
        name: 'Demo Video',
        url: '#',
      },
    ],
    images: [
      {
        src: '/placeholder.jpg',
        alt: 'Smart Chessboard Hardware',
      },
      {
        src: '/placeholder.jpg',
        alt: 'React Dashboard',
      },
      {
        src: '/placeholder.jpg',
        alt: 'PCB Design',
      },
    ],
  },
  {
    title: 'hideFlare: CDN Obfuscation Detection System',
    description:
      'Smart India Hackathon 2024 Finalist project for MP Police. Built a cybersecurity tool analyzing 2,000+ suspicious domains using a 6-layer detection system with DNS forensics, TLS fingerprinting, and ML (XGBoost) achieving 92% accuracy. Selected as one of the top 5 national teams out of 88,000+ participants.',
    techStack: [
      'Python',
      'Flask',
      'XGBoost',
      'Scikit-learn',
      'DNS Forensics',
      'TLS Fingerprinting',
      'Docker',
      'Cybersecurity'
    ],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/anujjainbatu',
      },
      {
        name: 'Project Details',
        url: '#',
      },
    ],
    images: [
      {
        src: '/placeholder.jpg',
        alt: 'hideFlare Dashboard',
      },
      {
        src: '/placeholder.jpg',
        alt: 'Detection System',
      },
      {
        src: '/placeholder.jpg',
        alt: 'Analysis Results',
      },
    ],
  },
  {
    title: 'Book Genre Classification System',
    description:
      'Developed ML model to classify book genres from descriptions using TF-IDF + XGBoost achieving 88% F1 score. Engineered FastAPI backend with REST endpoints for genre prediction and recommendations. Containerized service using Docker and deployed on AWS EC2 with auto-restart scripts.',
    techStack: [
      'Python',
      'XGBoost',
      'TF-IDF',
      'FastAPI',
      'Docker',
      'AWS EC2',
      'Machine Learning',
      'REST API'
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/anujjainbatu',
      },
    ],
    images: [
      {
        src: '/placeholder.jpg',
        alt: 'Book Classification Interface',
      },
      {
        src: '/placeholder.jpg',
        alt: 'ML Model Results',
      },
    ],
  },
  {
    title: 'Python Automation Suite',
    description:
      'Delivered 25+ Python automation solutions including web scraping, API bots, and data pipelines for global clients on Fiverr. Built GenAI-powered chatbots and autonomous agents using LangChain, LangGraph, and OpenAI APIs. Reduced manual work by 60% for clients.',
    techStack: [
      'Python',
      'LangChain',
      'LangGraph',
      'OpenAI API',
      'Web Scraping',
      'API Development',
      'Automation',
      'Chatbots'
    ],
    date: '2023-Present',
    links: [
      {
        name: 'Fiverr Profile',
        url: 'https://www.fiverr.com',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/anujjainbatu',
      },
    ],
    images: [
      {
        src: '/placeholder.jpg',
        alt: 'Automation Dashboard',
      },
      {
        src: '/placeholder.jpg',
        alt: 'Bot Interface',
      },
    ],
  },
  {
    title: 'AI Portfolio Website',
    description:
      'Built a modern, responsive portfolio website with AI-powered chat integration using Next.js and React. Features include dynamic project showcases, interactive components, and seamless user experience with modern design patterns.',
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'AI Integration',
      'Responsive Design'
    ],
    date: '2025',
    links: [
      {
        name: 'Live Site',
        url: '#',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/anujjainbatu',
      },
    ],
    images: [
      {
        src: '/placeholder.jpg',
        alt: 'Portfolio Homepage',
      },
      {
        src: '/placeholder.jpg',
        alt: 'Project Section',
      },
    ],
  },
];

// ProjectContent component
const ProjectContent = ({ project }: { project: { title: string } }) => {
  const projectData = PROJECT_CONTENT.find(p => p.title === project.title);
  
  if (!projectData) return null;

  return (
    <div className="bg-card text-card-foreground max-w-4xl space-y-6 p-0">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 text-primary rounded-lg p-2">
            <Img className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{projectData.title}</h3>
            <p className="text-muted-foreground text-sm">{projectData.date}</p>
          </div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {projectData.description}
        </p>
      </div>

      {/* Tech Stack */}
      {projectData.techStack && projectData.techStack.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {projectData.techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-accent text-accent-foreground rounded-full px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium">Links</h4>
          <div className="flex flex-wrap gap-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 flex items-center gap-2 transition-colors"
              >
                <Link className="h-4 w-4" />
                {link.name}
                <ChevronRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'IoT System',
    title: 'Low-Cost Smart Chessboard with Cloud Integration',
    src: '/placeholder.jpg',
    content: <ProjectContent project={{ title: 'Low-Cost Smart Chessboard with Cloud Integration' }} />,
  },
  {
    category: 'Cybersecurity Tool',
    title: 'hideFlare: CDN Obfuscation Detection System',
    src: '/placeholder.jpg',
    content: <ProjectContent project={{ title: 'hideFlare: CDN Obfuscation Detection System' }} />,
  },
  {
    category: 'Machine Learning',
    title: 'Book Genre Classification System',
    src: '/placeholder.jpg',
    content: <ProjectContent project={{ title: 'Book Genre Classification System' }} />,
  },
  {
    category: 'Automation',
    title: 'Python Automation Suite',
    src: '/placeholder.jpg',
    content: <ProjectContent project={{ title: 'Python Automation Suite' }} />,
  },
  {
    category: 'Web Development',
    title: 'AI Portfolio Website',
    src: '/placeholder.jpg',
    content: <ProjectContent project={{ title: 'AI Portfolio Website' }} />,
  },
];

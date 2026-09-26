export interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'E-Commerce' | 'AI / FYP';
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  details?: string[];
}

export interface DesignItem {
  id: string;
  title: string;
  category: 'Logos' | 'Social Media' | 'YouTube Thumbnails' | 'Banners' | 'Flyers' | 'Business Cards' | 'CV Designs' | 'Presentations';
  image: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; levelName: string; iconName: string }[];
}

export const PERSONAL_INFO = {
  name: "Muhammad Umar Asim",
  title: "Frontend Web Developer & Graphic Designer",
  location: "Faisalabad, Pakistan",
  email: "umarasim841@gmail.com",
  github: "https://github.com/umarasim-dev",
  linkedin: "https://www.linkedin.com/in/umarasim2204688",
  fiverr: "https://fiverr.com",
  tagline: "I build modern, responsive and user-friendly websites with a strong focus on frontend development, clean UI and engaging digital experiences.",
  profileImage: "/profile.jpg",
  bio: `I am Muhammad Umar Asim, an IT professional and passionate Frontend Web Developer with a strong interest in web development, programming, UI design and graphic design.

My primary focus is frontend development, where I transform ideas and designs into responsive and interactive websites.

I work with HTML, CSS, Tailwind CSS, JavaScript, Bootstrap, React, Next.js and Figma.

Alongside web development, I have practical experience in graphic design, including logos, banners, thumbnails, flyers, business cards, CVs, presentations and social media graphics.

I continuously improve my skills by working on real-world projects and learning modern technologies.`,
  stats: [
    { label: "Web Dev Experience", value: "1+ Year" },
    { label: "Freelance & Graphic Design", value: "3+ Years" },
    { label: "Projects Completed", value: "25+" },
    { label: "Degree Focus", value: "BS IT" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", levelName: "Advanced", iconName: "Code2" },
      { name: "CSS3", levelName: "Advanced", iconName: "Palette" },
      { name: "JavaScript (ES6+)", levelName: "Proficient", iconName: "FileCode" },
      { name: "Tailwind CSS", levelName: "Advanced", iconName: "Sparkles" },
      { name: "Bootstrap", levelName: "Advanced", iconName: "Layout" },
      { name: "React.js", levelName: "Proficient", iconName: "Layers" },
      { name: "Next.js", levelName: "Proficient", iconName: "Cpu" },
      { name: "Responsive Web Design", levelName: "Expert", iconName: "Monitor" }
    ]
  },
  {
    category: "UI & Layout Design",
    skills: [
      { name: "Figma", levelName: "Proficient", iconName: "Figma" },
      { name: "UI Implementation", levelName: "Expert", iconName: "LayoutGrid" },
      { name: "Design to Code", levelName: "Expert", iconName: "Code" },
      { name: "Responsive UI", levelName: "Expert", iconName: "Smartphone" },
      { name: "Web Layout Design", levelName: "Advanced", iconName: "Box" }
    ]
  },
  {
    category: "Graphic Design",
    skills: [
      { name: "Canva Pro", levelName: "Expert", iconName: "Image" },
      { name: "Adobe Illustrator", levelName: "Proficient", iconName: "PenTool" },
      { name: "Logo Design", levelName: "Advanced", iconName: "Award" },
      { name: "Banner & Thumbnail Design", levelName: "Expert", iconName: "Maximize" },
      { name: "Social Media Graphics", levelName: "Expert", iconName: "Share2" },
      { name: "Flyers & Business Cards", levelName: "Advanced", iconName: "FileText" },
      { name: "CV & Presentation Design", levelName: "Advanced", iconName: "Presentation" }
    ]
  },
  {
    category: "Other Technical Skills",
    skills: [
      { name: "Git & GitHub", levelName: "Proficient", iconName: "GitBranch" },
      { name: "SQL & Database Fundamentals", levelName: "Intermediate", iconName: "Database" },
      { name: "Microsoft Word", levelName: "Advanced", iconName: "File" },
      { name: "Microsoft Excel", levelName: "Advanced", iconName: "Table" },
      { name: "Microsoft PowerPoint", levelName: "Advanced", iconName: "Video" },
      { name: "Data Management & IT Support", levelName: "Advanced", iconName: "Server" }
    ]
  }
];

export const SERVICES_DATA = [
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description: "Building modern responsive interfaces using HTML, CSS, JavaScript, Tailwind CSS, React and Next.js with clean code and high performance.",
    icon: "Code2"
  },
  {
    id: "responsive-design",
    title: "Responsive Web Design",
    description: "Creating web layouts meticulously optimized for smooth viewing across desktop, tablet, and mobile device viewports.",
    icon: "Monitor"
  },
  {
    id: "ui-implementation",
    title: "UI Implementation",
    description: "Converting Figma mockups and design concepts into clean, accessible, and functional web user interfaces.",
    icon: "LayoutGrid"
  },
  {
    id: "website-dev",
    title: "Website Development",
    description: "Developing custom professional websites for individuals, businesses, organizations, and personal brand portfolios.",
    icon: "Globe"
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Designing professional digital graphics, thumbnails, banners, flyers, logos, social media posts, and brand identity materials.",
    icon: "Palette"
  },
  {
    id: "presentation-docs",
    title: "Presentation & Document Design",
    description: "Creating high-impact PowerPoint presentations, professional CVs, digital documents, and branded collateral.",
    icon: "Presentation"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-sar-zoon",
    role: "Frontend / Web Development",
    company: "Sar Zoon Software House",
    location: "Faisalabad, Pakistan",
    period: "Approx. 1 Year",
    description: [
      "Engineered responsive user interfaces and websites utilizing HTML5, CSS3, Tailwind CSS, JavaScript, and Bootstrap.",
      "Converted complex Figma design mockups into pixel-perfect, accessible frontend code.",
      "Collaborated with backend developers to integrate APIs and ensure cross-browser compatibility across client projects."
    ],
    skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Bootstrap", "Responsive Web Design", "Figma"]
  },
  {
    id: "exp-chenab",
    role: "Computer Operator & Designer",
    company: "Chenab Group of School & College",
    location: "Faisalabad, Pakistan",
    period: "05 May 2025 – 23 June 2026",
    description: [
      "Managed digital document creation, presentations, institutional data management, and visual materials.",
      "Designed educational banners, event flyers, official social media posts, and institutional digital graphics.",
      "Provided daily IT support, system operations, and administrative data entry workflows."
    ],
    skills: ["Graphic Design", "Digital Documents", "Presentations", "Data Management", "IT Support"]
  },
  {
    id: "exp-freelance",
    role: "Freelance Graphic & Digital Services",
    company: "Freelance / Fiverr",
    location: "Remote / Online",
    period: "Approx. 3+ Years",
    description: [
      "Delivered custom graphic design solutions including logo design, YouTube thumbnails, social media banners, flyers, and business cards.",
      "Created high-impact CV designs and professional PowerPoint pitch decks for international clients.",
      "Provided data entry, document formatting, and digital asset preparation with high client satisfaction."
    ],
    skills: ["Logo Design", "Social Media Graphics", "Thumbnails", "Banners", "Flyers", "CV Design", "MS Office"]
  },
  {
    id: "exp-swismax",
    role: "Full Stack Developer Intern",
    company: "Swismax Solutions",
    location: "Islamabad, Pakistan",
    period: "Internship",
    description: [
      "Gained hands-on experience in full-stack web architecture, frontend component design, and database queries.",
      "Participated in sprint planning, code reviews, and testing workflows."
    ],
    skills: ["Web Development", "Frontend Components", "Database Basics", "Git"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "creedd-noir",
    title: "Creedd Noir — Modern E-Commerce Platform",
    category: "E-Commerce",
    shortDescription: "A modern e-commerce website designed with a responsive frontend and user-friendly product presentation.",
    fullDescription: "Creedd Noir is an online retail platform focused on delivering an elegant product showcase with smooth navigation, responsive layout grids, and interactive cart previews.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Web Design", "E-Commerce UX"],
    image: "/projects/creeddnoir.svg",
    demoUrl: "https://creeddnoir.com/",
    featured: true,
    details: [
      "Responsive hero banner and product collection grid",
      "Interactive category filtering and search preview",
      "Optimized mobile navigation drawer and product detail view"
    ]
  },
  {
    id: "university-website",
    title: "Responsive University Academic Portal",
    category: "Web Development",
    shortDescription: "A responsive university website developed as an academic web development project using HTML and CSS.",
    fullDescription: "A clean multi-page educational web project showcasing campus news, course directory, faculty listings, and student admissions info structured with modern HTML5 and CSS3.",
    technologies: ["HTML5", "CSS3", "Responsive Layout", "Flexbox & Grid"],
    image: "/projects/university.svg",
    githubUrl: "https://github.com/umarasim-dev/university-website",
    featured: true,
    details: [
      "Structured semantic HTML5 accessibility layout",
      "CSS Grid & Flexbox navigation bar with dropdown menus",
      "Full viewport responsiveness across desktop, tablet, and mobile"
    ]
  },
  {
    id: "carpsense-fyp",
    title: "CarpSense — AI-Based Fish Health & Species Identification",
    category: "AI / FYP",
    shortDescription: "An AI-powered application designed to identify carp fish species and provide automated health analysis.",
    fullDescription: "CarpSense is a computer vision application built as a Final Year Project (FYP) for BS Information Technology. It leverages deep learning CNN models to classify 7 major carp species and analyze visual health indicators using Grad-CAM heatmaps.",
    technologies: ["Flutter", "Dart", "Deep Learning", "CNN", "TensorFlow Lite", "Grad-CAM", "Computer Vision"],
    image: "/projects/carpsense.svg",
    githubUrl: "https://github.com/umarasim-dev",
    featured: true,
    details: [
      "Classifies 7 carp species: Rohu, Catla, Mrigal, Kalbasu, Silver Carp, Grass Carp, Common Carp",
      "Grad-CAM visual heatmap explainability for disease detection",
      "TensorFlow Lite mobile model integration for offline field inference"
    ]
  }
];

export const GRAPHIC_DESIGNS: DesignItem[] = [
  {
    id: "design-1",
    title: "Tech Company Logo",
    category: "Logos",
    image: "/designs/logo_tech.png",
    description: "Brand identity logo design."
  },
  {
    id: "design-2",
    title: "Chenab Group Logo",
    category: "Logos",
    image: "/designs/logo_Chenab.png",
    description: "Logo design for Chenab Group."
  },
  {
    id: "design-3",
    title: "Zyreb Logo",
    category: "Logos",
    image: "/designs/logo_zyreb.png",
    description: "Brand identity logo design for Zyreb."
  },
  {
    id: "design-4",
    title: "Social Media Post 1",
    category: "Social Media",
    image: "/designs/social_post.jpg",
    description: "Social media campaign graphic."
  },
  {
    id: "design-5",
    title: "Social Media Post 2",
    category: "Social Media",
    image: "/designs/social_post1.jpg",
    description: "Social media campaign graphic."
  },
  {
    id: "design-6",
    title: "Social Media Post 3",
    category: "Social Media",
    image: "/designs/social_post2.png",
    description: "Social media campaign graphic."
  },
  {
    id: "design-7",
    title: "Social Media Post 4",
    category: "Social Media",
    image: "/designs/social_post3.png",
    description: "Social media campaign graphic."
  },
  {
    id: "design-8",
    title: "Social Media Post 5",
    category: "Social Media",
    image: "/designs/social_post4.png",
    description: "Social media campaign graphic."
  },
  {
    id: "design-9",
    title: "Social Media Post 6",
    category: "Social Media",
    image: "/designs/social_post5.png",
    description: "Social media campaign graphic."
  },
  {
    id: "design-10",
    title: "Social Media Post 7",
    category: "Social Media",
    image: "/designs/social_post6.png",
    description: "Social media campaign graphic."
  },
  {
    id: "design-11",
    title: "Social Media Post 8",
    category: "Social Media",
    image: "/designs/social_post7.png",
    description: "Social media campaign graphic."
  },
  {
    id: "design-12",
    title: "Social Media Post 9",
    category: "Social Media",
    image: "/designs/social_post8.png",
    description: "Social media campaign graphic."
  },
  {
    id: "design-13",
    title: "YouTube Thumbnail",
    category: "YouTube Thumbnails",
    image: "/designs/thumbnail.png",
    description: "Custom YouTube video thumbnail."
  },
  {
    id: "design-14",
    title: "Promotional Banner 1",
    category: "Banners",
    image: "/designs/banner.png",
    description: "Promotional banner design."
  },
  {
    id: "design-15",
    title: "Promotional Banner 2",
    category: "Banners",
    image: "/designs/banner1.png",
    description: "Promotional banner design."
  },
  {
    id: "design-16",
    title: "Promotional Flyer",
    category: "Flyers",
    image: "/designs/flyer.png",
    description: "Promotional flyer design."
  },
  {
    id: "design-6",
    title: "Minimalist Executive Business Card",
    category: "Business Cards",
    image: "/designs/business_card.svg",
    description: "Double-sided modern business card design with QR code contact info."
  },
  {
    id: "design-7",
    title: "Professional Tech Resume / CV Design",
    category: "CV Designs",
    image: "/designs/cv_design.svg",
    description: "Clean two-column resume design formatted for high ATS readability."
  },
  {
    id: "design-8",
    title: "Corporate Pitch Deck Presentation",
    category: "Presentations",
    image: "/designs/presentation.svg",
    description: "Modern 15-slide PowerPoint deck for startup investor presentations."
  }
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Science in Information Technology",
  institution: "University of Education — Lahore Campus, Faisalabad",
  status: "Final stage of BS Information Technology",
  relevantAreas: [
    "Web Development",
    "Programming",
    "Database Systems",
    "Information Technology",
    "Software Development",
    "Artificial Intelligence"
  ]
};

export const TECHNICAL_HIGHLIGHTS = [
  {
    title: "Responsive First",
    description: "I build websites engineered to render smoothly across mobile (320px+), tablet, laptop, and 4K desktop screens.",
    icon: "Monitor"
  },
  {
    title: "Clean Code",
    description: "I focus on well-organized, readable, semantic HTML/CSS/JS and modular component architecture.",
    icon: "Code2"
  },
  {
    title: "Modern UI",
    description: "I create intuitive, clean visual interfaces with high contrast, modern typography, and fast loading speed.",
    icon: "LayoutGrid"
  },
  {
    title: "Design to Code",
    description: "I convert Figma wireframes, Photoshop layouts, and design ideas into functional web pages.",
    icon: "Figma"
  },
  {
    title: "Performance First",
    description: "Optimized image loading, minimal CSS overhead, and light JavaScript bundles for fast Lighthouse performance.",
    icon: "Zap"
  },
  {
    title: "Continuous Learning",
    description: "Actively mastering modern frontend frameworks (React, Next.js, TypeScript) and modern web tooling.",
    icon: "BookOpen"
  }
];

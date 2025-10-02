import { Project, Skill, DeveloperProfile, LearningEntry } from '@/types';

// Real developer projects
export const developerProjects: Project[] = [
  {
    id: '1',
    title: 'Café Aurora',
    slug: 'cafe-aurora',
    description: 'Landing page de café de especialidad con e-commerce, dark mode y animaciones avanzadas',
    longDescription: 'Café Aurora es una landing page moderna para una cafetería de especialidad. El proyecto incluye un diseño elegante con sistema de tema claro/oscuro, animaciones fluidas con Framer Motion, sección de productos con filtros, testimonios en carrusel, información de ubicaciones, y formulario de newsletter. Desarrollada con Next.js 14, TypeScript, Tailwind CSS y shadcn/ui.',
    year: 2024,
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui'],
    category: 'web',
    status: 'completed',
    featured: true,
    href: '/projects/cafe-aurora',
    githubUrl: 'https://github.com/JuanferV21/CafeAurora2',
    liveUrl: 'https://cafe-aurora2.vercel.app',
    coverImage: {
      src: '/projects/cafe-aurora-cover.svg',
      alt: 'Café Aurora Landing Page Screenshot',
      blurDataURL: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI0YxRjVGOSIvPjwvc3ZnPg=='
    },
    features: [
      'Dark/Light mode con persistencia y animaciones suaves',
      'Logo personalizado con efectos de glow animado',
      'Scroll progress bar con spring physics',
      'Product showcase con filtros por tipo de tueste',
      'Cards con micro-animaciones y efectos hover avanzados',
      'Carrusel de testimonios con navegación por teclado',
      'Skeleton loaders con efecto shimmer',
      'Formulario de newsletter con validación Zod',
      'Diseño completamente responsive',
      'Optimizado para performance (Lighthouse 90+)'
    ],
    metrics: {
      performance: '90+ Lighthouse',
      stars: 0
    }
  }
];

// Sample skills data
export const developerSkills: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 5,
    years: 4,
    color: '#61DAFB'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 4,
    years: 3,
    color: '#000000'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 5,
    years: 3,
    color: '#3178C6'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 5,
    years: 2,
    color: '#06B6D4'
  },
  {
    id: 'vue',
    name: 'Vue.js',
    category: 'frontend',
    level: 3,
    years: 2,
    color: '#4FC08D'
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 5,
    years: 4,
    color: '#339933'
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    level: 4,
    years: 3,
    color: '#000000'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    level: 4,
    years: 3,
    color: '#3776AB'
  },
  {
    id: 'django',
    name: 'Django',
    category: 'backend',
    level: 3,
    years: 2,
    color: '#092E20'
  },

  // Database
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    level: 4,
    years: 3,
    color: '#336791'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    level: 4,
    years: 3,
    color: '#47A248'
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'database',
    level: 3,
    years: 2,
    color: '#DC382D'
  },

  // DevOps
  {
    id: 'docker',
    name: 'Docker',
    category: 'devops',
    level: 4,
    years: 2,
    color: '#2496ED'
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'devops',
    level: 3,
    years: 2,
    color: '#FF9900'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'devops',
    level: 4,
    years: 2,
    color: '#000000'
  },

  // Tools
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    level: 5,
    years: 5,
    color: '#F05032'
  },
  {
    id: 'jest',
    name: 'Jest',
    category: 'tools',
    level: 4,
    years: 3,
    color: '#C21325'
  },

  // Languages
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'languages',
    level: 5,
    years: 5,
    color: '#F7DF1E'
  },
  {
    id: 'golang',
    name: 'Go',
    category: 'languages',
    level: 3,
    years: 1,
    color: '#00ADD8'
  }
];

// Learning journey entries (replacing fictional work experience)
export const learningJourney: LearningEntry[] = [
  {
    id: '1',
    title: 'Full-Stack Development Mastery',
    period: '2024 - Present',
    type: 'Advanced Learning',
    description: 'Advancing into complex full-stack applications with modern architectures',
    milestones: [
      'Built complete e-commerce platform with payment integration',
      'Implemented RESTful APIs with authentication and real-time features',
      'Deployed applications using Docker and cloud services',
      'Created component libraries and development tools'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
    status: 'ongoing'
  },
  {
    id: '2',
    title: 'Modern Frontend Development',
    period: '2024',
    type: 'Skill Development',
    description: 'Transitioned from basic web development to modern React ecosystem',
    milestones: [
      'Mastered React hooks, context, and state management',
      'Learned TypeScript for type-safe development',
      'Built responsive applications with Tailwind CSS',
      'Implemented animations and interactive UI components'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
    status: 'completed'
  },
  {
    id: '3',
    title: 'Programming Fundamentals',
    period: '2023 - 2024',
    type: 'Foundation',
    description: 'Started programming journey with web technologies fundamentals',
    milestones: [
      'Learned HTML, CSS, and JavaScript from scratch',
      'Built first interactive web applications',
      'Understanding of programming concepts and best practices',
      'Created portfolio projects to demonstrate skills'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'VS Code'],
    status: 'completed'
  }
];

// Sample developer profile
export const developerProfile: DeveloperProfile = {
  name: 'Fernando Valenzuela',
  title: 'Full Stack Developer',
  bio: 'Self-taught full-stack developer passionate about building efficient, scalable web applications. I love learning new technologies, solving complex problems, and creating solutions that make a difference.',
  location: 'Mexico',
  avatar: {
    src: '/profile-avatar.jpg',
    alt: 'Fernando Valenzuela Profile Photo'
  },
  social: {
    github: 'https://github.com/fervalenz',
    linkedin: 'https://linkedin.com/in/fervalenz',
    email: 'fernando@example.com'
  },
  skills: developerSkills,
  experience: [] // Now using learningJourney instead
};

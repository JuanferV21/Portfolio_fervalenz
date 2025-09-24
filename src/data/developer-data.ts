import { Project, Skill, DeveloperProfile, LearningEntry } from '@/types';

// Sample developer projects
export const developerProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    slug: 'ecommerce-platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL',
    longDescription: 'A complete e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, admin dashboard, and order management system.',
    year: 2024,
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    category: 'web',
    status: 'completed',
    featured: true,
    href: '/projects/ecommerce-platform',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    coverImage: {
      src: '/projects/ecommerce-cover.svg',
      alt: 'E-commerce Platform Screenshot',
      blurDataURL: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI0YxRjVGOSIvPjwvc3ZnPg=='
    },
    features: [
      'User authentication and authorization',
      'Product catalog with search and filters',
      'Shopping cart and checkout process',
      'Payment integration with Stripe',
      'Admin dashboard for inventory management',
      'Order tracking and email notifications'
    ],
    metrics: {
      users: 1200,
      performance: '95% Lighthouse',
      stars: 47
    }
  },
  {
    id: '2',
    title: 'Task Management API',
    slug: 'task-api',
    description: 'RESTful API for task management with authentication and real-time updates',
    longDescription: 'A robust RESTful API built with Express.js and MongoDB. Features JWT authentication, real-time updates with WebSocket, comprehensive testing, and detailed API documentation.',
    year: 2024,
    technologies: ['Node.js', 'Express', 'MongoDB', 'Jest', 'Swagger'],
    category: 'api',
    status: 'maintained',
    featured: true,
    href: '/projects/task-api',
    githubUrl: 'https://github.com/yourusername/task-api',
    liveUrl: 'https://api.tasks-app.com/docs',
    coverImage: {
      src: '/projects/api-cover.svg',
      alt: 'API Documentation Screenshot',
      blurDataURL: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI0YxRjVGOSIvPjwvc3ZnPg=='
    },
    features: [
      'JWT-based authentication',
      'CRUD operations for tasks and projects',
      'Real-time updates with WebSocket',
      'Comprehensive API documentation',
      'Unit and integration testing',
      'Rate limiting and security headers'
    ],
    metrics: {
      stars: 45,
      performance: '99.9% uptime'
    }
  },
  {
    id: '3',
    title: 'React Component Library',
    slug: 'react-components',
    description: 'Reusable React component library with TypeScript and Storybook',
    longDescription: 'A modern React component library built with TypeScript, featuring customizable components, comprehensive documentation with Storybook, and automated testing.',
    year: 2024,
    technologies: ['React', 'TypeScript', 'Jest', 'Tailwind CSS'],
    category: 'library',
    status: 'in-progress',
    featured: false,
    href: '/projects/react-components',
    githubUrl: 'https://github.com/yourusername/react-components',
    npmUrl: 'https://www.npmjs.com/package/@yourusername/react-components',
    coverImage: {
      src: '/projects/components-cover.svg',
      alt: 'Component Library Storybook',
      blurDataURL: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI0YxRjVGOSIvPjwvc3ZnPg=='
    },
    features: [
      'TypeScript-first development',
      'Customizable with CSS variables',
      'Interactive Storybook documentation',
      'Automated testing with Jest',
      'Tree-shaking support',
      'NPM package publishing'
    ],
    metrics: {
      downloads: 2500,
      stars: 23
    }
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    slug: 'weather-dashboard',
    description: 'Real-time weather dashboard with charts and location-based forecasts',
    longDescription: 'An interactive weather dashboard that provides real-time weather data, forecasts, and visualizations. Built with Next.js and integrated with multiple weather APIs.',
    year: 2023,
    technologies: ['Next.js', 'Tailwind CSS'],
    category: 'web',
    status: 'completed',
    featured: false,
    href: '/projects/weather-dashboard',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.vercel.app',
    coverImage: {
      src: '/projects/weather-cover.svg',
      alt: 'Weather Dashboard Interface',
      blurDataURL: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI0YxRjVGOSIvPjwvc3ZnPg=='
    },
    features: [
      'Real-time weather data',
      'Interactive charts and graphs',
      'Location-based search',
      '7-day weather forecast',
      'Responsive design',
      'Dark/light mode toggle'
    ],
    metrics: {
      users: 850
    }
  },
  {
    id: '5',
    title: 'DevOps Monitoring Tool',
    slug: 'devops-monitoring',
    description: 'Container monitoring and alerting system with Docker and Prometheus',
    longDescription: 'A comprehensive monitoring solution for containerized applications using Docker, Prometheus, and Grafana. Includes custom metrics, alerting rules, and automated deployment.',
    year: 2023,
    technologies: ['Docker', 'Node.js', 'Python'],
    category: 'tool',
    status: 'maintained',
    featured: true,
    href: '/projects/devops-monitoring',
    githubUrl: 'https://github.com/yourusername/devops-monitoring',
    coverImage: {
      src: '/projects/monitoring-cover.svg',
      alt: 'Monitoring Dashboard',
      blurDataURL: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI0YxRjVGOSIvPjwvc3ZnPg=='
    },
    features: [
      'Real-time container monitoring',
      'Custom metric collection',
      'Automated alerting system',
      'Grafana dashboards',
      'Docker Compose setup',
      'Slack notifications'
    ],
    metrics: {
      stars: 67
    }
  },
  {
    id: '6',
    title: 'Mobile Expense Tracker',
    slug: 'expense-tracker',
    description: 'React Native app for personal expense tracking with data visualization',
    longDescription: 'A cross-platform mobile application for tracking personal expenses. Features include expense categorization, budget management, and detailed analytics with charts.',
    year: 2023,
    technologies: ['React', 'JavaScript'],
    category: 'mobile',
    status: 'completed',
    featured: false,
    href: '/projects/expense-tracker',
    githubUrl: 'https://github.com/yourusername/expense-tracker',
    coverImage: {
      src: '/projects/mobile-cover.svg',
      alt: 'Mobile App Interface',
      blurDataURL: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI0YxRjVGOSIvPjwvc3ZnPg=='
    },
    features: [
      'Expense categorization',
      'Budget tracking and alerts',
      'Data visualization with charts',
      'Cloud data synchronization',
      'Offline functionality',
      'Export to CSV/PDF'
    ],
    metrics: {
      users: 450
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
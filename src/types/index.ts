// Core Types
export interface Image {
  src: string;
  alt: string;
  blurDataURL?: string;
  width?: number;
  height?: number;
}

export interface Video {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

// Developer Project Types
export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  year?: number;
  technologies: string[];
  category: 'web' | 'mobile' | 'api' | 'tool' | 'library';
  status: 'completed' | 'in-progress' | 'maintained';
  featured?: boolean;
  href: string;

  // Links
  githubUrl?: string;
  liveUrl?: string;
  npmUrl?: string;

  // Media
  coverImage: Image;
  screenshots?: Image[];

  // Technical details
  features: string[];
  challenges?: string[];
  learnings?: string[];
  metrics?: {
    users?: number;
    stars?: number;
    downloads?: number;
    performance?: string;
  };

  // SEO
  seo?: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: Image;
  };
}

export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
  blurDataURL?: string;
  caption?: string;
  aspectRatio?: AspectRatio;
  order?: number;
}

export type AspectRatio = 'square' | 'portrait' | 'landscape' | 'wide' | 'ultrawide';

// Page Types
export interface PageMeta {
  title: string;
  description?: string;
  keywords?: string[];
  ogImage?: Image;
  canonical?: string;
  noindex?: boolean;
}

export interface HeroSection {
  title: string;
  subtitle?: string;
  backgroundImage?: Image;
  backgroundVideo?: Video;
  cta?: {
    text: string;
    href: string;
  };
}

// CMS Types (for Sanity/Contentful integration)
export interface CMSProject extends Project {
  _id: string;
  _type: 'project';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

export interface CMSImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

// Developer-specific Types
export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'languages';
  level: 1 | 2 | 3 | 4 | 5; // 1 = Beginner, 5 = Expert
  icon?: string;
  color?: string;
  years?: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string; // undefined means current
  description: string[];
  technologies: string[];
  achievements?: string[];
  companyUrl?: string;
  logo?: string;
}

export interface LearningEntry {
  id: string;
  title: string;
  period: string;
  type: string;
  description: string;
  milestones: string[];
  technologies: string[];
  status: 'completed' | 'ongoing';
}

export interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  totalCommits: number;
  languages: {
    name: string;
    percentage: number;
    color: string;
  }[];
  topRepos: {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    url: string;
  }[];
}

export interface DeveloperProfile {
  name: string;
  title: string;
  bio: string;
  location: string;
  avatar: Image;
  resume?: string;
  social: {
    github: string;
    linkedin: string;
    twitter?: string;
    email: string;
  };
  skills: Skill[];
  experience: Experience[];
  education?: {
    degree: string;
    school: string;
    year: string;
  }[];
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

// Drop/Teaser Types
export interface Drop {
  id: string;
  title: string;
  description?: string;
  launchDate: string;
  isActive: boolean;
  image?: Image;
  video?: Video;
  emailList?: string[];
  countdownMessage?: string;
}

// Navigation Types
export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
  children?: NavigationItem[];
}

// Site Configuration
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: {
    name: string;
    email: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  social: {
    name: string;
    url: string;
    icon?: string;
  }[];
}

// API Response Types
export interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

// Animation Types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string | number[];
  stagger?: number;
}

export interface ParallaxConfig {
  enabled?: boolean;
  speed?: number;
  offset?: [string, string];
}
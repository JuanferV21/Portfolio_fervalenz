'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  description: string;
  coverImage: {
    src: string;
    alt: string;
    blurDataURL?: string;
  };
  tags?: string[];
  year?: number;
  href: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  className?: string;
}

export default function ProjectCard({
  project,
  index = 0,
  className = ''
}: ProjectCardProps) {
  return (
    <motion.div
      className={`group relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
    >
      <Link href={project.href} className="block">
        <div className="relative aspect-4/3 mb-6 overflow-hidden bg-neutral-100">
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            placeholder={project.coverImage.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={project.coverImage.blurDataURL}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-300" />
        </div>

        <div className="space-y-3">
          {/* Title and Year */}
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg md:text-xl font-medium tracking-tight group-hover:text-neutral-600 transition-colors duration-200">
              {project.title}
            </h3>
            {project.year && (
              <span className="text-sm text-neutral-500 font-mono">
                {project.year}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-neutral-600 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs px-2 py-1 text-neutral-400">
                  +{project.tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
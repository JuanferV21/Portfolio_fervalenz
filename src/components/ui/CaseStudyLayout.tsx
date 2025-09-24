'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  poster?: string;
  blurDataURL?: string;
  caption?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide';
}

interface CaseStudyLayoutProps {
  title: string;
  description: string;
  year?: number;
  client?: string;
  role?: string;
  tags?: string[];
  media: MediaItem[];
  nextProject?: {
    title: string;
    href: string;
    image: string;
  };
  children?: ReactNode;
}

const aspectRatioClasses = {
  square: 'aspect-square',
  portrait: 'aspect-3/4',
  landscape: 'aspect-4/3',
  wide: 'aspect-video',
};

export default function CaseStudyLayout({
  title,
  description,
  year,
  client,
  role,
  tags,
  media,
  nextProject,
  children
}: CaseStudyLayoutProps) {
  return (
    <article className="section-padding container-max py-12 md:py-20">
      {/* Header */}
      <motion.header
        className="mb-16 md:mb-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-balance">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 text-pretty">
            {description}
          </p>

          {/* Meta information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            {year && (
              <div>
                <dt className="font-medium text-neutral-900 mb-1">Year</dt>
                <dd className="text-neutral-600">{year}</dd>
              </div>
            )}
            {client && (
              <div>
                <dt className="font-medium text-neutral-900 mb-1">Client</dt>
                <dd className="text-neutral-600">{client}</dd>
              </div>
            )}
            {role && (
              <div>
                <dt className="font-medium text-neutral-900 mb-1">Role</dt>
                <dd className="text-neutral-600">{role}</dd>
              </div>
            )}
            {tags && tags.length > 0 && (
              <div>
                <dt className="font-medium text-neutral-900 mb-1">Tags</dt>
                <dd className="flex flex-wrap gap-1">
                  {tags.map((tag, index) => (
                    <span key={tag} className="text-neutral-600">
                      {tag}
                      {index < tags.length - 1 && ','}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Content with custom text blocks */}
      {children && (
        <motion.div
          className="max-w-3xl mb-16 md:mb-24 prose prose-neutral prose-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      )}

      {/* Media Gallery */}
      <div className="space-y-16 md:space-y-24">
        {media.map((item, index) => (
          <motion.div
            key={index}
            className={`relative ${
              item.aspectRatio
                ? aspectRatioClasses[item.aspectRatio]
                : 'aspect-video'
            } overflow-hidden bg-neutral-100`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3 + index * 0.1,
              ease: 'easeOut'
            }}
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt || ''}
                fill
                className="object-cover"
                quality={95}
                placeholder={item.blurDataURL ? 'blur' : 'empty'}
                blurDataURL={item.blurDataURL}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              />
            ) : (
              <video
                className="w-full h-full object-cover"
                controls
                poster={item.poster}
                preload="metadata"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            )}

            {/* Caption */}
            {item.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white text-sm">{item.caption}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Next Project */}
      {nextProject && (
        <motion.div
          className="mt-24 md:mt-32 pt-16 md:pt-24 border-t border-neutral-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
        >
          <div className="text-sm text-neutral-600 mb-4">Next Project</div>
          <Link
            href={nextProject.href}
            className="group flex items-center space-x-6 hover:opacity-80 transition-opacity duration-200"
          >
            <div className="relative w-24 h-24 bg-neutral-100 overflow-hidden">
              <Image
                src={nextProject.image}
                alt={nextProject.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="96px"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium tracking-tight group-hover:text-neutral-600 transition-colors duration-200">
                {nextProject.title}
              </h3>
              <span className="text-sm text-neutral-500 link-underline">
                View Project →
              </span>
            </div>
          </Link>
        </motion.div>
      )}
    </article>
  );
}
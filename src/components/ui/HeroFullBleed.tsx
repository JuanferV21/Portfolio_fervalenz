'use client';

import { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

interface HeroFullBleedProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  image?: {
    src: string;
    alt: string;
    blurDataURL?: string;
  };
  video?: {
    src: string;
    poster?: string;
  };
  className?: string;
  parallax?: boolean;
  overlay?: boolean;
}

export default function HeroFullBleed({
  title,
  subtitle,
  children,
  image,
  video,
  className = '',
  parallax = true,
  overlay = true,
}: HeroFullBleedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, parallax ? -50 : 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section
      ref={containerRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Background Media */}
      {image && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: parallax ? y : undefined }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            className="object-cover"
            quality={90}
            placeholder={image.blurDataURL ? 'blur' : 'empty'}
            blurDataURL={image.blurDataURL}
          />
        </motion.div>
      )}

      {video && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: parallax ? y : undefined }}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={video.poster}
          >
            <source src={video.src} type="video/mp4" />
          </video>
        </motion.div>
      )}

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gray-900/20 z-10" />
      )}

      {/* Content */}
      <motion.div
        className="relative z-20 text-center section-padding w-full"
        style={{ opacity: parallax ? opacity : undefined }}
      >
        <div className="container-max">
          <motion.h1
            className="hero-text text-white mb-6 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              {children}
            </motion.div>
          )}
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-3 bg-white/80 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
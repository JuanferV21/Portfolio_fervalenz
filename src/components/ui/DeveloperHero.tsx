'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import TerminalSimulator from './TerminalSimulator';

interface DeveloperHeroProps {
  name: string;
  title: string;
  description: string;
  primarySkills: string[];
  children?: ReactNode;
  className?: string;
}

export default function DeveloperHero({
  name,
  title,
  description,
  primarySkills,
  children,
  className = ''
}: DeveloperHeroProps) {
  return (
    <section className={`relative py-32 md:py-40 lg:py-48 bg-white ${className}`}>
      <div className="section-padding container-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Geometric Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-4 order-2 lg:order-1"
          >
            <div className="relative">
              {/* Terminal occupies entire square */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                className="w-full aspect-square"
              >
                <TerminalSimulator />
              </motion.div>

              {/* Secondary geometric elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 border-4 border-black bg-white"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-800"></div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-8 order-1 lg:order-2 space-y-12"
          >
            {/* Name & Title */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight tracking-widest text-black uppercase leading-none"
              >
                {name.split(' ').map((word, index) => (
                  <div key={index} className={index > 0 ? 'ml-8' : ''}>
                    {word}
                  </div>
                ))}
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest text-black uppercase ml-8"
              >
                {title}
              </motion.h2>

              {/* Separator Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-px bg-black ml-8 max-w-md"
              />
            </div>

            {/* Skills - Minimalist Typography */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="ml-8 space-y-2"
            >
              <div className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-4">
                Core Technologies
              </div>
              <div className="text-lg font-light tracking-wide text-black uppercase">
                {primarySkills.join(' • ')}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="ml-8 max-w-2xl"
            >
              <p className="text-lg font-light text-gray-700 leading-relaxed">
                {description}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="ml-8 flex flex-col sm:flex-row gap-4 pt-4"
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 pt-16 border-t border-black"
        >
          <div className="text-center">
            <div className="font-mono text-xs uppercase tracking-widest text-black">
              Building efficient solutions for modern web
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
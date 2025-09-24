'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types';
import Icon from './Icon';

interface ProjectImageViewerProps {
  projects: Project[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectImageViewer({
  projects,
  initialIndex,
  isOpen,
  onClose
}: ProjectImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Update current index when initial index changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const navigateToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const navigateToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          navigateToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          navigateToNext();
          break;
        case 'Escape':
          event.preventDefault();
          onClose();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, navigateToNext, navigateToPrevious, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const currentProject = projects[currentIndex];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="border-b border-white/20 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="text-white font-mono text-sm tracking-wider">
                [{(currentIndex + 1).toString().padStart(2, '0')}/{projects.length.toString().padStart(2, '0')}]
              </span>
              <h2 className="text-white font-light text-lg uppercase tracking-wide">
                {currentProject.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-100"
              aria-label="Close image viewer"
            >
              <Icon name="close" size="md" />
            </button>
          </div>

          {/* Image Container */}
          <div className="flex-1 flex items-center justify-center px-6 py-8 relative">
            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateToPrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors duration-100 z-10"
              disabled={projects.length <= 1}
              aria-label="Previous project"
            >
              <Icon name="arrow-left" size="lg" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateToNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors duration-100 z-10"
              disabled={projects.length <= 1}
              aria-label="Next project"
            >
              <Icon name="arrow-right" size="lg" />
            </button>

            {/* Image */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl max-h-[70vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative border-2 border-white">
                <Image
                  src={currentProject.coverImage.src}
                  alt={currentProject.coverImage.alt}
                  width={800}
                  height={600}
                  className="max-h-[70vh] w-auto object-contain"
                  placeholder={currentProject.coverImage.blurDataURL ? 'blur' : 'empty'}
                  blurDataURL={currentProject.coverImage.blurDataURL}
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Footer - Tech Stack */}
          <div className="border-t border-white/20 px-6 py-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-white font-light text-xs uppercase tracking-[0.15em]">
                  Stack
                </span>
                <div className="flex-1 h-px bg-white/20" />
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-white font-mono text-sm uppercase tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
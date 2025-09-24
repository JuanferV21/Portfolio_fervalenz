'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/types';
import ProjectImageViewer from './ProjectImageViewer';

interface ProjectsListProps {
  projects: Project[];
  className?: string;
}

const getStatusDisplay = (status: string) => {
  const statusMap: Record<string, string> = {
    'completed': 'LIVE',
    'in-progress': 'DEVELOPMENT',
    'maintained': 'MAINTAINED',
    'archived': 'ARCHIVED'
  };
  return statusMap[status] || status.toUpperCase();
};

export default function ProjectsList({ projects, className = '' }: ProjectsListProps) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  const openViewer = (index: number) => {
    setViewerIndex(index);
    setViewerOpen(true);
  };

  const closeViewer = () => {
    setViewerOpen(false);
  };

  return (
    <div className={`space-y-0 ${className}`}>
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          className="group"
        >
          <div className="py-8 border-b border-gray-200 hover:border-gray-400 transition-colors duration-100">
            {/* Project Header with Image */}
            <div className="flex items-start gap-6 mb-6">
              {/* Project Image - Clickable */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => openViewer(index)}
                  className="w-20 h-20 bg-gray-100 border border-black overflow-hidden hover:border-gray-600 transition-colors duration-100 cursor-pointer"
                >
                  <Image
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                    placeholder={project.coverImage.blurDataURL ? 'blur' : 'empty'}
                    blurDataURL={project.coverImage.blurDataURL}
                  />
                </button>
              </div>

              {/* Project Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-baseline space-x-4">
                    <span className="text-xs font-mono text-gray-400 tracking-wider">
                      [{(index + 1).toString().padStart(2, '0')}]
                    </span>
                    <h3 className="text-xl font-light text-black uppercase tracking-wide">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-4 text-xs font-mono text-gray-500">
                    <span>{project.year}</span>
                    <span>/</span>
                    <span className="bg-gray-100 px-2 py-1 text-black">
                      {getStatusDisplay(project.status)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 font-light leading-relaxed mb-4 max-w-4xl">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="space-y-4">
              {/* Technologies */}
              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-xs font-light text-black uppercase tracking-[0.15em]">
                    Stack
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm font-mono text-black uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions - Improved Buttons */}
              <div>
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-xs font-light text-black uppercase tracking-[0.15em]">
                    Actions
                  </span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 text-sm font-mono uppercase tracking-wide hover:bg-gray-800 transition-colors duration-100"
                    >
                      [VIEW LIVE]
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black border border-black px-4 py-2 text-sm font-mono uppercase tracking-wide hover:bg-gray-100 transition-colors duration-100"
                    >
                      [GITHUB]
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Footer Statement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: projects.length * 0.05 + 0.2 }}
        className="pt-8"
      >
        <div className="text-center">
          <p className="text-xs font-light text-gray-500 uppercase tracking-[0.15em]">
            More projects available on request
          </p>
        </div>
      </motion.div>

      {/* Image Viewer Modal */}
      <ProjectImageViewer
        projects={projects}
        initialIndex={viewerIndex}
        isOpen={viewerOpen}
        onClose={closeViewer}
      />
    </div>
  );
}
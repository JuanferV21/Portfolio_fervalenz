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
          <div className="p-6 border-2 border-black mb-6 hover:bg-gray-50 transition-colors duration-200">
            {/* Project Header with Image */}
            <div className="flex items-start gap-6 mb-6">
              {/* Project Image - Clickable */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => openViewer(index)}
                  className="w-24 h-24 bg-gray-100 border-2 border-black overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <Image
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                    width={96}
                    height={96}
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

                  <div className="flex items-center space-x-4 text-xs font-mono">
                    <span className="text-gray-600">{project.year}</span>
                    <span className="text-gray-400">/</span>
                    <span className="bg-black text-white px-3 py-1 uppercase tracking-wide">
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
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-xs font-mono text-black uppercase tracking-wider">
                    STACK
                  </span>
                  <div className="flex-1 h-px bg-black" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono text-black uppercase tracking-wide bg-gray-100 px-2 py-1 text-center border border-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div>
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-xs font-mono text-black uppercase tracking-wider">
                    ACTIONS
                  </span>
                  <div className="flex-1 h-px bg-black" />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-6 py-3 text-sm font-mono uppercase tracking-wide hover:bg-gray-800 transition-colors duration-200 text-center border-2 border-black"
                    >
                      View Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black border-2 border-black px-6 py-3 text-sm font-mono uppercase tracking-wide hover:bg-gray-100 transition-colors duration-200 text-center"
                    >
                      View Source Code
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
'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/types';

interface TimelineProps {
  experiences: Experience[];
  className?: string;
}

export default function Timeline({ experiences, className = '' }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200"></div>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={`${experience.company}-${experience.startDate}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-start space-x-6"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="w-4 h-4 bg-black border-4 border-white shadow-sm"></div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-8">
              <div className="bg-white p-6 border border-gray-200 hover:border-gray-300 transition-all duration-200">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-light text-black uppercase tracking-wide">
                      {experience.position}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span className="px-3 py-1 bg-gray-100 text-black uppercase text-xs tracking-wide">
                        {experience.company}
                      </span>
                      <span>•</span>
                      <span>
                        {experience.startDate} - {experience.endDate || 'Present'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center mt-2 space-x-2">
                    <h4 className="text-lg font-light text-black">
                      {experience.company}
                    </h4>
                    {experience.location && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">
                          {experience.location}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 font-light">
                  {experience.description}
                </p>

                {/* Achievements */}
                {experience.achievements && experience.achievements.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-sm font-light text-black mb-2 uppercase tracking-wide">
                      Key Achievements:
                    </h5>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-2 text-sm text-gray-600 font-light">
                          <span className="text-black mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                {experience.technologies && experience.technologies.length > 0 && (
                  <div>
                    <h5 className="text-sm font-light text-black mb-3 uppercase tracking-wide">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-light bg-gray-100 text-black border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Current status indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: experiences.length * 0.2 }}
        className="relative flex items-start space-x-6"
      >
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-4 h-4 bg-black border-4 border-white shadow-sm animate-pulse"></div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm text-gray-500 font-light uppercase tracking-wide">
            Currently available for new opportunities
          </div>
        </div>
      </motion.div>
    </div>
  );
}
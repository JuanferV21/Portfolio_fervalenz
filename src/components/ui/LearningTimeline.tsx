'use client';

import { motion } from 'framer-motion';
import { LearningEntry } from '@/types';

interface LearningTimelineProps {
  entries: LearningEntry[];
  className?: string;
}

export default function LearningTimeline({ entries, className = '' }: LearningTimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-black"></div>

      <div className="space-y-16">
        {entries.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-start space-x-8"
          >
            {/* Timeline dot */}
            <div className="relative z-10 flex items-center justify-center">
              <div className={`w-4 h-4 border-4 border-white shadow-sm ${
                entry.status === 'ongoing' ? 'bg-black animate-pulse' : 'bg-black'
              }`}></div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 pb-8">
              <div className="bg-white border-2 border-black hover:border-gray-800 transition-colors duration-200">
                {/* Header */}
                <div className="p-6 border-b border-gray-200 bg-gray-50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-light text-black uppercase tracking-wide mb-2">
                        {entry.title}
                      </h3>
                      <div className="text-sm font-mono uppercase tracking-widest text-gray-600">
                        {entry.type}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className={`px-3 py-1 text-xs font-mono uppercase tracking-wide ${
                        entry.status === 'ongoing'
                          ? 'bg-black text-white'
                          : 'bg-gray-200 text-black'
                      }`}>
                        {entry.status}
                      </div>
                      <div className="text-sm font-mono text-gray-600">
                        {entry.period}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-700 mb-6 font-light leading-relaxed">
                    {entry.description}
                  </p>

                  {/* Key Milestones */}
                  <div className="mb-6">
                    <h4 className="text-sm font-light text-black mb-3 uppercase tracking-wide">
                      Key Milestones:
                    </h4>
                    <ul className="space-y-2">
                      {entry.milestones.map((milestone, mIndex) => (
                        <li key={mIndex} className="flex items-start space-x-3 text-sm text-gray-600 font-light">
                          <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                          <span>{milestone}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-light text-black mb-3 uppercase tracking-wide">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {entry.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-light bg-gray-100 text-black border border-gray-300 hover:bg-gray-200 transition-colors duration-150"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Current status indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: entries.length * 0.2 }}
        className="relative flex items-start space-x-8"
      >
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-4 h-4 bg-black border-4 border-white shadow-sm"></div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-light uppercase tracking-wide">
            <span className="text-black">Currently:</span>{' '}
            <span className="text-gray-600">Building advanced projects & seeking opportunities</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
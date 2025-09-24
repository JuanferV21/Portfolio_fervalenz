'use client';

import { motion } from 'framer-motion';
import { Skill } from '@/types';

interface TechStackProps {
  skills: Skill[];
  showLevels?: boolean;
  className?: string;
}

const categoryTitles: Record<string, string> = {
  frontend: 'FRONTEND',
  backend: 'BACKEND',
  database: 'DATABASE',
  devops: 'DEVOPS & CLOUD',
  tools: 'TOOLS & TESTING',
  languages: 'LANGUAGES',
};

export default function TechStack({ skills, showLevels = true, className = '' }: TechStackProps) {
  // Group skills by category and sort by level (highest first)
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Sort categories by importance and skills by level
  const categoryOrder = ['frontend', 'backend', 'languages', 'database', 'devops', 'tools'];
  const sortedCategories = categoryOrder.filter(cat => groupedSkills[cat]);

  Object.keys(groupedSkills).forEach(category => {
    groupedSkills[category].sort((a, b) => b.level - a.level);
  });

  const renderLevelBar = (level: number) => {
    return (
      <div className="flex items-center space-x-2">
        <div className="w-16 h-1 bg-gray-200">
          <div
            className="h-full bg-black transition-all duration-300"
            style={{ width: `${(level / 5) * 100}%` }}
          />
        </div>
        <span className="text-xs font-mono text-gray-500 w-4">
          {level}/5
        </span>
      </div>
    );
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {sortedCategories.map((category, categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: categoryIndex * 0.1 }}
        >
          {/* Category Header - Brutalista Compacto */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-black uppercase tracking-[0.2em] mb-2">
              {categoryTitles[category] || category}
            </h3>
            <div className="h-px bg-black w-full border-0" />
          </div>

          {/* Skills List - Compacto */}
          <div className="space-y-2">
            {groupedSkills[category].map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: (categoryIndex * 0.1) + (index * 0.03) }}
                className="group"
              >
                <div className="flex items-center justify-between py-2 px-0 border-b border-gray-100 hover:border-gray-300 transition-colors duration-150">
                  {/* Skill Info */}
                  <div className="flex-1">
                    <div className="flex items-baseline space-x-4">
                      <span className="text-base font-light text-black uppercase tracking-wide">
                        {skill.name}
                      </span>
                      {skill.years && (
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                          {skill.years}Y
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Level Indicator */}
                  {showLevels && (
                    <div className="ml-6">
                      {renderLevelBar(skill.level)}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Footer Statement Integrado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="pt-6 mt-6 border-t border-black"
      >
        <div className="text-center">
          <p className="text-xs font-light text-gray-600 uppercase tracking-[0.15em] leading-relaxed">
            Continuous learning, constant evolution,<br />
            building the future with code.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
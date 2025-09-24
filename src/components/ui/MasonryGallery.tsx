'use client';

import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

interface MasonryGalleryProps {
  projects: Project[];
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  className?: string;
}

export default function MasonryGallery({
  projects,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  className = ''
}: MasonryGalleryProps) {
  const [columnCount, setColumnCount] = useState(columns.mobile);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumnCount(columns.desktop);
      } else if (window.innerWidth >= 768) {
        setColumnCount(columns.tablet);
      } else {
        setColumnCount(columns.mobile);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, [columns]);

  // Split projects into columns
  const projectColumns = Array.from({ length: columnCount }, (_, colIndex) =>
    projects.filter((_, index) => index % columnCount === colIndex)
  );

  return (
    <div className={`w-full ${className}`}>
      <div
        className="flex gap-6 md:gap-8"
        style={{
          gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
        }}
      >
        {projectColumns.map((columnProjects, columnIndex) => (
          <div key={columnIndex} className="flex-1 space-y-12 md:space-y-16">
            {columnProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={columnIndex * Math.ceil(projects.length / columnCount) + index}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
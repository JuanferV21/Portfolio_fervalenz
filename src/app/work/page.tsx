'use client';

import { useState, useMemo } from 'react';
import Layout from '@/components/layout/Layout';
import ProjectsList from '@/components/ui/ProjectsList';
import { developerProjects } from '@/data/developer-data';

const categories = ['all', 'web', 'api', 'mobile', 'tool', 'library'];
const categoryLabels = {
  all: 'All Projects',
  web: 'Web Applications',
  api: 'APIs & Backend',
  mobile: 'Mobile Apps',
  tool: 'Tools & DevOps',
  library: 'Libraries & Components'
};

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    developerProjects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return ['all', ...Array.from(techSet).sort()];
  }, []);

  // Filter projects based on selected category and technology
  const filteredProjects = useMemo(() => {
    let projects = developerProjects;

    // Filter by category
    if (selectedCategory !== 'all') {
      projects = projects.filter(project => project.category === selectedCategory);
    }

    // Filter by technology
    if (selectedTechnology !== 'all') {
      projects = projects.filter(project =>
        project.technologies.includes(selectedTechnology)
      );
    }

    return projects;
  }, [selectedCategory, selectedTechnology]);

  return (
    <Layout>
      <div className="section-padding container-max py-24 md:py-32">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-widest mb-6 text-black uppercase">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl font-light">
            A collection of applications, tools, and libraries I&apos;ve built using modern
            technologies. From full-stack web applications to developer tools and open source contributions.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-8">
          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-light text-black uppercase tracking-wide mb-4">
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedTechnology('all'); // Reset technology filter when changing category
                  }}
                  className={`px-4 py-2 text-sm font-light transition-all duration-200 uppercase tracking-wide ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Filter */}
          <div>
            <h3 className="text-sm font-light text-black uppercase tracking-wide mb-4">
              Filter by Technology
            </h3>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTechnology(tech)}
                  className={`px-3 py-1 text-xs font-light transition-all duration-200 uppercase tracking-wide ${
                    selectedTechnology === tech
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  {tech === 'all' ? 'All Technologies' : tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Count & Active Filters */}
        <div className="mb-8 space-y-3">
          <p className="text-sm text-gray-500 font-light uppercase tracking-wide">
            Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          </p>

          {/* Active Filters Display */}
          {(selectedCategory !== 'all' || selectedTechnology !== 'all') && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs text-gray-600 uppercase tracking-wide">Active Filters:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-black text-white text-xs uppercase tracking-wide">
                  {categoryLabels[selectedCategory as keyof typeof categoryLabels]}
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className="hover:bg-gray-800 px-1 rounded"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedTechnology !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800 text-white text-xs uppercase tracking-wide">
                  {selectedTechnology}
                  <button
                    onClick={() => setSelectedTechnology('all')}
                    className="hover:bg-gray-700 px-1 rounded"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Projects List */}
        <ProjectsList
          projects={filteredProjects}
        />

        {/* GitHub CTA */}
        <div className="mt-24 md:mt-32 pt-16 md:pt-24 border-t border-gray-200 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-2xl font-light text-black uppercase tracking-wide">
              Want to see more?
            </h3>
            <p className="text-gray-600 font-light">
              Check out my GitHub for more projects, contributions to open source,
              and experiments with new technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/fervalenz"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View GitHub Profile
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
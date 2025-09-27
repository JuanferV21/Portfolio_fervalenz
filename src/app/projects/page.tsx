'use client';

import { useState, useMemo, useCallback } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilterOpen, setCategoryFilterOpen] = useState(false);
  const [technologyFilterOpen, setTechnologyFilterOpen] = useState(false);

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    developerProjects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return ['all', ...Array.from(techSet).sort()];
  }, []);

  // Filter projects based on search, category and technology
  const filteredProjects = useMemo(() => {
    let projects = developerProjects;

    // Filter by search term
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      projects = projects.filter(project =>
        project.title.toLowerCase().includes(term) ||
        project.description.toLowerCase().includes(term) ||
        project.technologies.some(tech => tech.toLowerCase().includes(term))
      );
    }

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
  }, [selectedCategory, selectedTechnology, searchTerm]);

  return (
    <Layout>
      <div className="section-padding container-max py-24 md:py-32">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-widest mb-6 text-black uppercase">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl font-light">
            Production-ready applications and tools built with modern technologies.
            Search, filter, or browse through my development portfolio.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border-2 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black font-light"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black font-mono text-lg"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Collapsible Filters */}
        <div className="mb-8 space-y-4">
          {/* Category Filter */}
          <details className="group" open={categoryFilterOpen}>
            <summary
              className="cursor-pointer flex items-center justify-between p-3 border-2 border-black bg-white hover:bg-gray-50 transition-colors list-none"
              onClick={(e) => {
                e.preventDefault();
                setCategoryFilterOpen(!categoryFilterOpen);
              }}
            >
              <span className="text-sm font-light text-black uppercase tracking-wide">
                Filter by Category
                {selectedCategory !== 'all' && (
                  <span className="ml-2 font-mono text-xs">({categoryLabels[selectedCategory as keyof typeof categoryLabels]})</span>
                )}
              </span>
              <span className={`transform transition-transform text-black ${
                categoryFilterOpen ? 'rotate-90' : ''
              }`}>▶</span>
            </summary>
            {categoryFilterOpen && (
              <div className="mt-3 p-4 border-2 border-black border-t-0 bg-gray-50">
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setSelectedTechnology('all');
                      }}
                      className={`px-4 py-2 text-sm font-light transition-all duration-200 uppercase tracking-wide border-2 ${
                        selectedCategory === category
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-black hover:bg-gray-100'
                      }`}
                    >
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </details>

          {/* Technology Filter */}
          <details className="group" open={technologyFilterOpen}>
            <summary
              className="cursor-pointer flex items-center justify-between p-3 border-2 border-black bg-white hover:bg-gray-50 transition-colors list-none"
              onClick={(e) => {
                e.preventDefault();
                setTechnologyFilterOpen(!technologyFilterOpen);
              }}
            >
              <span className="text-sm font-light text-black uppercase tracking-wide">
                Filter by Technology
                {selectedTechnology !== 'all' && (
                  <span className="ml-2 font-mono text-xs">({selectedTechnology})</span>
                )}
              </span>
              <span className={`transform transition-transform text-black ${
                technologyFilterOpen ? 'rotate-90' : ''
              }`}>▶</span>
            </summary>
            {technologyFilterOpen && (
              <div className="mt-3 p-4 border-2 border-black border-t-0 bg-gray-50">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {allTechnologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setSelectedTechnology(tech)}
                      className={`px-3 py-2 text-xs font-light transition-all duration-200 uppercase tracking-wide border ${
                        selectedTechnology === tech
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-black hover:bg-gray-100'
                      }`}
                    >
                      {tech === 'all' ? 'All' : tech}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </details>
        </div>

        {/* Results Counter & Clear Filters */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-sm text-gray-600 font-mono uppercase tracking-wide">
            [{filteredProjects.length.toString().padStart(2, '0')}] Projects Found
          </p>

          {(selectedCategory !== 'all' || selectedTechnology !== 'all' || searchTerm.trim()) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedTechnology('all');
                setSearchTerm('');
              }}
              className="text-xs font-mono text-black hover:text-gray-600 uppercase tracking-wide border border-black px-3 py-1 hover:bg-gray-100 transition-colors"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Projects List */}
        <ProjectsList
          projects={filteredProjects}
        />

        {/* Enhanced CTA */}
        <div className="mt-24 md:mt-32 pt-16 md:pt-24 border-t-2 border-black">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-black p-8 md:p-12 bg-white">
              <div className="text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-light text-black uppercase tracking-wide">
                  Explore More Work
                </h3>
                <p className="text-gray-700 font-light max-w-2xl mx-auto">
                  Interested in collaborating or want to see more projects?
                  Check out my GitHub for open source contributions and experimental work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
                    Start a Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
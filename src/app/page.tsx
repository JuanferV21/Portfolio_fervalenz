import Layout from '@/components/layout/Layout';
import DeveloperHero from '@/components/ui/DeveloperHero';
import ProjectsList from '@/components/ui/ProjectsList';
import TechStack from '@/components/ui/TechStack';
import Icon from '@/components/ui/Icon';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Image from 'next/image';
import { developerProjects, developerSkills, developerProfile } from '@/data/developer-data';

// Get featured projects
const featuredProjects = developerProjects.filter(project => project.featured);

export default function Home() {
  // Get primary skills for hero
  const primarySkills = ['React', 'TypeScript', 'Node.js', 'PostgreSQL'];

  return (
    <Layout>
      {/* Hero Section */}
      <DeveloperHero
        name={developerProfile.name}
        title={developerProfile.title}
        description={developerProfile.bio}
        primarySkills={primarySkills}
      >
        <a
          href="/projects"
          className="btn-primary"
        >
          View Projects
        </a>
        <a
          href={developerProfile.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          GitHub
        </a>
      </DeveloperHero>

      {/* Featured Projects Section */}
      <section className="section-padding container-max py-24 md:py-32 lg:py-40">
        <ScrollReveal animation="fadeInUp" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mb-3 sm:mb-4 text-black uppercase">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-light">
            Production-ready applications solving real-world problems with modern technology stacks
          </p>
        </ScrollReveal>

        <ScrollReveal animation="slideInFromBottom" delay={0.2}>
          <ProjectsList
            projects={featuredProjects}
          />
        </ScrollReveal>

        <ScrollReveal animation="fadeInUp" delay={0.4} className="mt-8 sm:mt-10 md:mt-12 text-center">
          <a
            href="/projects"
            className="btn-secondary"
          >
            View All Projects
          </a>
        </ScrollReveal>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding container-max py-24 md:py-32 lg:py-40 border-t-2 border-black">
        <ScrollReveal animation="fadeInUp" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mb-3 sm:mb-4 text-black uppercase">
            Technologies I Use
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            I work with modern technologies to build scalable and efficient solutions
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fadeInUp" delay={0.3}>
          <TechStack
            skills={developerSkills}
            showLevels={false}
            className="max-w-6xl mx-auto"
          />
        </ScrollReveal>
      </section>

      {/* About Preview Section */}
      <section className="section-padding container-max py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          <ScrollReveal animation="fadeInLeft" className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest text-black uppercase">
              About Me
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 font-light">
              <p>
                Full-stack developer specializing in React, Node.js, and modern web technologies.
                I build scalable applications with clean architecture and focus on delivering
                exceptional user experiences through thoughtful engineering.
              </p>
              <p>
                Currently working on enterprise-level projects while exploring emerging technologies
                like AI integration and real-time systems. Available for collaborative projects
                and consulting opportunities.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2">
              <a
                href="/about"
                className="btn-primary text-center"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="btn-secondary text-center"
              >
                Get In Touch
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="scaleIn" delay={0.3} className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:ml-auto">
            <div className="relative aspect-square bg-gray-100 overflow-hidden">
              <Image
                src={developerProfile.avatar.src}
                alt={developerProfile.avatar.alt}
                fill
                className="object-cover"
                priority={false}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 448px"
              />
            </div>

            {/* Floating tech icons - Optimized positioning */}
            <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-black text-white p-2 sm:p-3 shadow-lg z-10">
              <Icon name="code" size="sm" className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-gray-800 text-white p-2 sm:p-3 shadow-lg z-10">
              <Icon name="terminal" size="sm" className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 bg-gray-700 text-white p-2 sm:p-3 shadow-lg z-10">
              <Icon name="repository" size="sm" className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-gray-900 text-white p-2 sm:p-3 shadow-lg z-10">
              <Icon name="star" size="sm" className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
}

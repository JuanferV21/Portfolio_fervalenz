import Layout from '@/components/layout/Layout';
import DeveloperHero from '@/components/ui/DeveloperHero';
import ProjectsList from '@/components/ui/ProjectsList';
import TechStack from '@/components/ui/TechStack';
import Icon from '@/components/ui/Icon';
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
      <section className="section-padding container-max py-24 md:py-32">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-4 text-black uppercase">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl font-light">
            A selection of my recent work building web applications, APIs, and tools
          </p>
        </div>

        <ProjectsList
          projects={featuredProjects}
        />

        <div className="mt-12 text-center">
          <a
            href="/work"
            className="btn-secondary"
          >
            View All Projects
          </a>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding container-max py-24 md:py-32 bg-gray-50">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-4 text-black uppercase">
            Technologies I Use
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            I work with modern technologies to build scalable and efficient solutions
          </p>
        </div>

        <TechStack
          skills={developerSkills}
          showLevels={false}
          className="max-w-6xl mx-auto"
        />
      </section>

      {/* About Preview Section */}
      <section className="section-padding container-max py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest text-black uppercase">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-gray-600 font-light">
              <p>
                I&apos;m passionate about creating efficient, scalable solutions that solve
                real-world problems. As a self-taught developer, I&apos;ve focused on building
                products that users love while continuously expanding my technical skills.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                contributing to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="/about"
                className="btn-primary"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="btn-secondary"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img
                src={developerProfile.avatar.src}
                alt={developerProfile.avatar.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating tech icons */}
            <div className="absolute -top-4 -right-4 bg-black text-white p-3 shadow-lg animate-bounce">
              <Icon name="code" size="md" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gray-800 text-white p-3 shadow-lg animate-pulse">
              <Icon name="terminal" size="md" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

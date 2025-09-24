import Layout from '@/components/layout/Layout';
import LearningTimeline from '@/components/ui/LearningTimeline';
import TechStack from '@/components/ui/TechStack';
import GitHubStats from '@/components/ui/GitHubStats';
import ProjectsList from '@/components/ui/ProjectsList';
import Icon from '@/components/ui/Icon';
import { developerProfile, developerSkills, learningJourney, developerProjects } from '@/data/developer-data';

export default function AboutPage() {
  // Get featured projects for highlights
  const featuredProjects = developerProjects.filter(project => project.featured);

  return (
    <Layout>
      <div className="section-padding container-max py-24 md:py-32">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 md:mb-40">
          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 border-2 border-black overflow-hidden">
              <img
                src={developerProfile.avatar.src}
                alt={developerProfile.avatar.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Geometric overlay elements */}
            <div className="absolute -top-6 -right-6 bg-black text-white p-4">
              <Icon name="code" size="lg" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gray-800 text-white p-4">
              <Icon name="terminal" size="lg" />
            </div>

            {/* Status badge */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-white border border-black p-3">
                <div className="font-mono text-xs uppercase tracking-widest text-black text-center">
                  Available for opportunities
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-widest mb-8 text-black uppercase leading-tight">
                About Me
              </h1>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                <p>
                  Self-taught full-stack developer passionate about crafting efficient, scalable web applications.
                  My journey began with curiosity about how websites work and evolved into a deep love for
                  problem-solving through code.
                </p>
                <p>
                  I specialize in modern JavaScript frameworks, focusing on React and Node.js ecosystems.
                  Every project I build teaches me something new, and I approach each challenge with
                  enthusiasm and a commitment to clean, maintainable code.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source,
                  or diving into the latest development trends. I believe in continuous learning and sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            {/* Skills Summary */}
            <div className="pt-6 border-t border-gray-200">
              <div className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-3">
                Core Focus Areas
              </div>
              <div className="text-lg font-light tracking-wide text-black uppercase">
                React • Node.js • TypeScript • Full-Stack Architecture
              </div>
            </div>

            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/contact"
                className="btn-primary"
              >
                Get In Touch
              </a>
              <a
                href={developerProfile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View GitHub
              </a>
            </div>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="mb-24 md:mb-32">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-4 text-black uppercase">
              GitHub Activity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              A snapshot of my contributions and activity on GitHub
            </p>
          </div>
          <GitHubStats
            username="fervalenz"
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Skills Section */}
        <div className="mb-24 md:mb-32 py-16 bg-gray-50 -mx-8 px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-4 text-black uppercase">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Technologies and tools I use to build modern applications
            </p>
          </div>
          <TechStack
            skills={developerSkills}
            showLevels={true}
            className="max-w-6xl mx-auto"
          />
        </div>

        {/* Learning Journey */}
        <div className="mb-24 md:mb-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-4 text-black uppercase">
              Learning Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl font-light">
              My path from programming beginner to full-stack developer, milestone by milestone
            </p>
          </div>
          <LearningTimeline entries={learningJourney} />
        </div>

        {/* Project Highlights */}
        <div className="mb-24 md:mb-32">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-4 text-black uppercase">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              A selection of projects that showcase my technical skills and problem-solving approach
            </p>
          </div>
          <ProjectsList projects={featuredProjects} />
          <div className="mt-12 text-center">
            <a
              href="/work"
              className="btn-secondary"
            >
              View All Projects
            </a>
          </div>
        </div>

        {/* Development Principles */}
        <div className="mb-24 md:mb-32 pt-16 md:pt-24 border-t border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-16 text-black uppercase text-center">
              Development Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center">
                  <Icon name="users" size="lg" className="text-white" />
                </div>
                <h3 className="text-xl font-light text-black uppercase tracking-wide">User-Focused</h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Every decision starts with the user. I build interfaces that are
                  intuitive, accessible, and performant because great code means nothing
                  if users can&apos;t enjoy the experience.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gray-800 border-2 border-black flex items-center justify-center">
                  <Icon name="code" size="lg" className="text-white" />
                </div>
                <h3 className="text-xl font-light text-black uppercase tracking-wide">Clean Architecture</h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Maintainable, readable, and well-structured code is essential.
                  I write code that my future self and other developers can understand
                  and extend without confusion.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gray-600 border-2 border-black flex items-center justify-center">
                  <Icon name="terminal" size="lg" className="text-white" />
                </div>
                <h3 className="text-xl font-light text-black uppercase tracking-wide">Continuous Growth</h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Technology evolves rapidly, and so do I. Every project teaches me
                  something new, and I actively seek challenges that push my skills
                  and understanding forward.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Goals & Next Steps */}
        <div className="mb-24 md:mb-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-12 text-black uppercase text-center">
              Goals & Aspirations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-black uppercase tracking-wide border-b border-gray-200 pb-2">
                  Short Term
                </h3>
                <ul className="space-y-3 text-gray-700 font-light">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Secure my first professional development role</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Contribute to meaningful open source projects</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Master advanced React patterns and state management</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Build production-ready applications with real users</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-black uppercase tracking-wide border-b border-gray-200 pb-2">
                  Long Term
                </h3>
                <ul className="space-y-3 text-gray-700 font-light">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Become a senior full-stack developer</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Lead development teams and mentor other developers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Build products that make a positive impact</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Contribute to the developer community through teaching</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-16 pt-12 border-t border-gray-200 text-center">
              <div className="bg-gray-50 border-2 border-black p-8">
                <h3 className="text-2xl font-light text-black uppercase tracking-wide mb-4">
                  Let&apos;s Build Something Together
                </h3>
                <p className="text-gray-700 font-light mb-6 max-w-2xl mx-auto">
                  I&apos;m actively seeking opportunities to contribute to meaningful projects
                  and grow as a developer. If you&apos;re looking for someone passionate,
                  dedicated, and eager to learn, let&apos;s connect.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="btn-primary"
                  >
                    Start a Conversation
                  </a>
                  <a
                    href={developerProfile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Explore My Code
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
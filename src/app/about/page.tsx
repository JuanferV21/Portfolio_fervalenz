import Layout from '@/components/layout/Layout';
import LearningTimeline from '@/components/ui/LearningTimeline';
import TechStack from '@/components/ui/TechStack';
import Icon from '@/components/ui/Icon';
import Image from 'next/image';
import ScrollReveal, { ScrollStagger, ScrollStaggerChild } from '@/components/ui/ScrollReveal';
import { developerProfile, developerSkills, learningJourney } from '@/data/developer-data';

export default function AboutPage() {

  return (
    <Layout>
      <div className="section-padding container-max py-24 md:py-32 lg:py-40">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 mb-24 md:mb-32 lg:mb-40">
          {/* Profile Image */}
          <ScrollReveal animation="scaleIn" className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto lg:mx-0 mt-4 sm:mt-6 md:mt-8 lg:mt-12">
            <div className="relative aspect-square bg-gray-100 border-2 border-black overflow-hidden">
              <Image
                src={developerProfile.avatar.src}
                alt={developerProfile.avatar.alt}
                fill
                className="object-cover"
                priority={true}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 448px"
              />

              {/* Geometric overlay elements */}
              <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-black text-white p-4 z-20">
                <Icon name="code" size="lg" />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-gray-800 text-white p-4 z-20">
                <Icon name="terminal" size="lg" />
              </div>

              {/* Status badge */}
              <div className="absolute bottom-2 sm:bottom-3 left-2 right-2 sm:left-3 sm:right-3 z-30">
                <div className="bg-white border border-black p-2.5 sm:p-3">
                  <div className="font-mono text-xs uppercase tracking-widest text-black text-center">
                    Available for opportunities
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal animation="fadeInRight" delay={0.3} className="space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight tracking-widest mb-6 sm:mb-8 text-black uppercase leading-tight">
                About Me
              </h1>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                <p>
                  Full-stack developer specializing in React, Node.js, and TypeScript with a passion for building
                  scalable, user-focused applications. My self-taught journey has shaped my problem-solving approach
                  and commitment to clean, maintainable code.
                </p>
                <p>
                  I thrive on turning complex challenges into elegant solutions, with experience in modern development
                  workflows, API design, and database architecture. Currently focused on mastering advanced React patterns
                  and exploring emerging technologies in the JavaScript ecosystem.
                </p>
                <p>
                  Beyond coding, I contribute to open source projects and stay current with industry trends.
                  I believe great software comes from understanding both the technical requirements and the human
                  experience behind every application.
                </p>
              </div>
            </div>

            {/* Skills Summary */}
            <div className="pt-6 border-t-2 border-black">
              <div className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-3">
                Core Focus Areas
              </div>
              <div className="text-lg font-light tracking-wide text-black uppercase">
                React • Node.js • TypeScript • PostgreSQL • Next.js
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Skills Section */}
        <div className="mb-24 md:mb-32 lg:mb-40 pt-16 border-t-2 border-black">
          <div className="mb-12 sm:mb-14 md:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mb-3 sm:mb-4 text-black uppercase">
              Technical Skills
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Technologies and tools I use to build modern applications
            </p>
          </div>
          <TechStack
            skills={developerSkills}
            showLevels={true}
            className="max-w-6xl mx-auto"
          />
        </div>

        {/* Development Principles */}
        <ScrollReveal animation="fadeInUp" className="mb-24 md:mb-32 lg:mb-40 pt-16 border-t-2 border-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mb-12 sm:mb-14 md:mb-16 text-black uppercase text-center">
              Development Principles
            </h2>
            <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              <ScrollStaggerChild className="space-y-6">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-black"></div>
                  <div className="absolute inset-2 bg-white"></div>
                  <div className="absolute inset-4 bg-black"></div>
                </div>
                <h3 className="text-xl font-light text-black uppercase tracking-wide">User-Focused</h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Every decision starts with the user. I build interfaces that are
                  intuitive, accessible, and performant because great code means nothing
                  if users can&apos;t enjoy the experience.
                </p>
              </ScrollStaggerChild>
              <ScrollStaggerChild className="space-y-6">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-gray-800"></div>
                  <div className="absolute inset-1 bg-white"></div>
                  <div className="absolute inset-3 bg-gray-800"></div>
                  <div className="absolute inset-5 bg-white"></div>
                </div>
                <h3 className="text-xl font-light text-black uppercase tracking-wide">Clean Architecture</h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Maintainable, readable, and well-structured code is essential.
                  I write code that my future self and other developers can understand
                  and extend without confusion.
                </p>
              </ScrollStaggerChild>
              <ScrollStaggerChild className="space-y-6">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-gray-600"></div>
                  <div className="absolute inset-1 bg-black"></div>
                  <div className="absolute inset-3 bg-white"></div>
                  <div className="absolute inset-5 bg-black"></div>
                </div>
                <h3 className="text-xl font-light text-black uppercase tracking-wide">Continuous Growth</h3>
                <p className="text-gray-700 font-light leading-relaxed">
                  Technology evolves rapidly, and so do I. Every project teaches me
                  something new, and I actively seek challenges that push my skills
                  and understanding forward.
                </p>
              </ScrollStaggerChild>
            </ScrollStagger>
          </div>
        </ScrollReveal>

        {/* Learning Journey */}
        <div className="mb-24 md:mb-32 lg:mb-40">
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mb-3 sm:mb-4 text-black uppercase">
              Learning Journey
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl font-light">
              Key milestones in my development journey, from first line of code to full-stack expertise
            </p>
          </div>
          <LearningTimeline entries={learningJourney} />
        </div>

        {/* Goals & Call to Action */}
        <div className="pt-16 border-t-2 border-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-widest mb-8 sm:mb-10 md:mb-12 text-black uppercase text-center">
              Goals & Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-black uppercase tracking-wide border-b-2 border-black pb-2">
                  Current Focus
                </h3>
                <ul className="space-y-3 text-gray-700 font-light">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Building enterprise-level React applications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Mastering advanced TypeScript patterns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Contributing to open source projects</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-black uppercase tracking-wide border-b-2 border-black pb-2">
                  Long-term Vision
                </h3>
                <ul className="space-y-3 text-gray-700 font-light">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Leading technical teams and architecture decisions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Building products that solve real-world problems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black mt-2 flex-shrink-0"></div>
                    <span>Mentoring next generation of developers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Unified Call to Action */}
            <div className="text-center border-2 border-black p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-light text-black uppercase tracking-wide mb-4 sm:mb-6">
                Let&apos;s Work Together
              </h3>
              <p className="text-base sm:text-lg text-gray-700 font-light mb-6 sm:mb-8 max-w-2xl mx-auto">
                Ready to collaborate on your next project? I bring technical expertise,
                problem-solving skills, and a commitment to delivering exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <a
                  href="/contact"
                  className="btn-primary"
                >
                  Start a Project
                </a>
                <a
                  href="/projects"
                  className="btn-secondary"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

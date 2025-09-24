import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/ui/ContactForm';
import Icon from '@/components/ui/Icon';
import { developerProfile } from '@/data/developer-data';

export default function ContactPage() {
  return (
    <Layout>
      <div className="section-padding container-max py-24 md:py-32">
        {/* Hero Section */}
        <div className="mb-32 md:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-start">
            {/* Geometric Element */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="relative">
                <div className="w-full aspect-square bg-black border-4 border-black"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-black bg-white"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Icon name="terminal" size="lg" className="text-white" />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-12">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-widest mb-8 text-black uppercase leading-tight">
                  Let&apos;s Connect
                </h1>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                  <p>
                    I&apos;m actively seeking opportunities to contribute as a full-stack developer.
                    Whether you&apos;re building a new application, need help with an existing project,
                    or want to discuss potential collaboration, I&apos;d love to hear from you.
                  </p>
                  <p>
                    I work with startups, established companies, and development teams who value
                    clean code, modern practices, and collaborative problem-solving.
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="border-2 border-black bg-gray-50 p-6">
                <div className="font-mono text-xs uppercase tracking-widest text-black mb-2">
                  Current Status
                </div>
                <div className="text-lg font-light text-black uppercase tracking-wide">
                  Available for Full-Time & Contract Opportunities
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 md:mb-40">
          {/* Direct Contact */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-widest text-black uppercase border-b-2 border-black pb-4">
              Direct Contact
            </h2>

            <div className="space-y-6">
              <div className="border border-gray-300 p-6 hover:border-black transition-colors duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-mono text-sm">@</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-2">
                      Email
                    </div>
                    <a
                      href={`mailto:${developerProfile.social.email}`}
                      className="text-lg font-light text-black hover:text-gray-600 transition-colors duration-200 uppercase tracking-wide"
                    >
                      {developerProfile.social.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 p-6 hover:border-black transition-colors duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Icon name="code" size="md" className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-2">
                      GitHub
                    </div>
                    <a
                      href={developerProfile.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-light text-black hover:text-gray-600 transition-colors duration-200 uppercase tracking-wide"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="border border-gray-300 p-6 hover:border-black transition-colors duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-600 flex items-center justify-center flex-shrink-0">
                    <Icon name="users" size="md" className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-2">
                      LinkedIn
                    </div>
                    <a
                      href={developerProfile.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-light text-black hover:text-gray-600 transition-colors duration-200 uppercase tracking-wide"
                    >
                      Connect
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-widest text-black uppercase border-b-2 border-black pb-4">
              Send Message
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Additional Information */}
        <div className="pt-16 md:pt-24 border-t-2 border-black">
          <h2 className="text-2xl md:text-3xl font-light tracking-widest text-black uppercase mb-16 text-center">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-black mx-auto flex items-center justify-center">
                <span className="text-white font-mono font-bold text-lg">24h</span>
              </div>
              <h3 className="text-lg font-light text-black uppercase tracking-wide">Response Time</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                I respond to all messages within 24 hours, usually much faster.
                For urgent inquiries, email is the fastest way to reach me.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-800 mx-auto flex items-center justify-center">
                <Icon name="code" size="md" className="text-white" />
              </div>
              <h3 className="text-lg font-light text-black uppercase tracking-wide">Development Focus</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                Specializing in React, Node.js, and modern full-stack development.
                Open to both junior roles and freelance projects.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-600 mx-auto flex items-center justify-center">
                <Icon name="terminal" size="md" className="text-white" />
              </div>
              <h3 className="text-lg font-light text-black uppercase tracking-wide">Collaboration Style</h3>
              <p className="text-gray-700 font-light leading-relaxed">
                I work well in teams, communicate clearly, and bring enthusiasm
                for learning and contributing to meaningful projects.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="mt-16 pt-12 border-t border-gray-200 text-center">
            <div className="bg-gray-50 border-2 border-black p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-light text-black uppercase tracking-wide mb-4">
                Location & Availability
              </h3>
              <p className="text-gray-700 font-light mb-4">
                Based in {developerProfile.location} • Open to remote work globally
              </p>
              <div className="text-sm font-mono uppercase tracking-widest text-gray-600">
                Ready to start immediately
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
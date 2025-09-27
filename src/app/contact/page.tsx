import Layout from '@/components/layout/Layout';
import ContactForm from '@/components/ui/ContactForm';
import Icon from '@/components/ui/Icon';
import { developerProfile } from '@/data/developer-data';

export default function ContactPage() {
  return (
    <Layout>
      <div className="section-padding container-max py-24 md:py-32">
        {/* Hero Section */}
        <div className="mb-24 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
            {/* Meaningful Visual Element */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="aspect-square bg-gray-100 border-2 border-black p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-mono font-bold text-black mb-2">{ }</div>
                    <div className="text-sm font-mono text-gray-600 uppercase tracking-wide">Ready to Code</div>
                    <div className="text-xs font-mono text-gray-500 mt-2">Available Now</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-widest mb-8 text-black uppercase leading-tight">
                  Let&apos;s Work Together
                </h1>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light">
                  <p>
                    Ready to collaborate on your next project? I bring technical expertise in
                    React, Node.js, and modern web development, with a focus on clean code
                    and exceptional user experiences.
                  </p>
                  <p>
                    I work with startups, established companies, and development teams who value
                    quality engineering, clear communication, and collaborative problem-solving.
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="border-2 border-black bg-white p-6">
                <div className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-2">
                  Current Status
                </div>
                <div className="text-lg font-light text-black uppercase tracking-wide">
                  Available for Full-Time & Contract Opportunities
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 md:mb-32">
          {/* Streamlined Contact Methods */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-widest text-black uppercase border-b-2 border-black pb-4">
              Contact Methods
            </h2>

            <div className="space-y-4">
              <a
                href={`mailto:${developerProfile.social.email}`}
                className="flex items-center justify-between p-4 border-2 border-black hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-sm bg-black text-white px-3 py-1 uppercase">EMAIL</span>
                  <span className="font-light text-gray-700">Primary contact method</span>
                </div>
                <span className="text-right font-mono text-sm text-black group-hover:text-gray-600 transition-colors">
                  {developerProfile.social.email}
                </span>
              </a>

              <a
                href={developerProfile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border-2 border-black hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-sm bg-gray-800 text-white px-3 py-1 uppercase">GITHUB</span>
                  <span className="font-light text-gray-700">View code & projects</span>
                </div>
                <span className="text-right font-mono text-sm text-black group-hover:text-gray-600 transition-colors">
                  @fervalenz
                </span>
              </a>

              <a
                href={developerProfile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 border-2 border-black hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-sm bg-gray-600 text-white px-3 py-1 uppercase">LINKEDIN</span>
                  <span className="font-light text-gray-700">Professional network</span>
                </div>
                <span className="text-right font-mono text-sm text-black group-hover:text-gray-600 transition-colors">
                  Connect →
                </span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-widest text-black uppercase border-b-2 border-black pb-4">
              Send Message
            </h2>

            {/* Form Context */}
            <div className="p-4 bg-gray-50 border-l-4 border-black">
              <p className="text-sm text-gray-700 font-light">
                Prefer email? Use the form below and I&apos;ll respond within 48 hours.
                For urgent inquiries, email me directly.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        {/* Simplified Expectations & Availability */}
        <div className="pt-16 md:pt-24 border-t-2 border-black">
          <h2 className="text-2xl md:text-3xl font-light tracking-widest text-black uppercase mb-12 text-center">
            What to Expect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <div className="border-2 border-black p-6">
              <h3 className="font-mono text-sm uppercase tracking-wide mb-3 text-black">Response Time</h3>
              <p className="text-gray-700 font-light">
                Usually within 48 hours. For urgent inquiries, email directly for faster response.
              </p>
            </div>
            <div className="border-2 border-black p-6">
              <h3 className="font-mono text-sm uppercase tracking-wide mb-3 text-black">Collaboration</h3>
              <p className="text-gray-700 font-light">
                Open to full-time roles, contract work, and project collaborations. Clear communication guaranteed.
              </p>
            </div>
          </div>

          {/* Consolidated Availability & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border-2 border-black p-6">
              <h3 className="font-mono text-sm uppercase tracking-wide mb-3 text-black">Availability</h3>
              <p className="text-black font-light mb-2">Available for full-time & contract opportunities</p>
              <p className="text-gray-600 text-sm">Ready to start immediately</p>
            </div>
            <div className="border-2 border-black p-6">
              <h3 className="font-mono text-sm uppercase tracking-wide mb-3 text-black">Location</h3>
              <p className="text-black font-light mb-2">Based in {developerProfile.location}</p>
              <p className="text-gray-600 text-sm">Open to remote work globally</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
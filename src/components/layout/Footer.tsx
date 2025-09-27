import Link from 'next/link';

const socialLinks = [
  { name: 'Email', href: 'mailto:hello@example.com' },
  { name: 'LinkedIn', href: '#' },
  { name: 'GitHub', href: '#' },
  { name: 'Instagram', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="section-padding container-max">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-medium mb-4">Portfolio</h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
                Visual systems, engineering, and creative problem solving.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-medium mb-4 text-gray-900">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/projects"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 link-underline"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 link-underline"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 link-underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-medium mb-4 text-gray-900">Connect</h4>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 link-underline"
                      target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200 link-underline"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200 link-underline"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import Container from './Container';
import { APP_CONFIG } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-950 text-white">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#6200EE"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-bold text-xl">Habit Tracker</span>
              </div>
              <p className="text-purple-200 text-sm max-w-xs">
                {APP_CONFIG.tagline}
              </p>
              {/* Social Links - Placeholder for when available */}
              {/* <div className="flex gap-4">
                <a href="#" className="text-purple-200 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    // Twitter icon
                  </svg>
                </a>
              </div> */}
            </div>

            {/* Links Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#features"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pricing"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href={APP_CONFIG.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-200 hover:text-white transition-colors text-sm"
                  >
                    Download App
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-purple-300 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${APP_CONFIG.supportEmail}`}
                    className="text-purple-200 hover:text-white transition-colors"
                  >
                    {APP_CONFIG.supportEmail}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-purple-300 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-purple-200">
                    Developer: {APP_CONFIG.developer}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-purple-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-purple-300">
              <p>
                © {currentYear} {APP_CONFIG.name}. All rights reserved.
              </p>
              <p className="text-purple-400">
                Made with intention by {APP_CONFIG.developer}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

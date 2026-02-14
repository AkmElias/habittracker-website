import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import ContactForm from '@/components/support/ContactForm';
import Accordion from '@/components/ui/Accordion';
import GradientText from '@/components/shared/GradientText';
import { faqData } from '@/lib/content/landing';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with Habit Tracker. Contact us or browse frequently asked questions.',
};

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-gradient-to-b from-purple-50 to-white">
        <Container>
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <GradientText as="span">How can we help?</GradientText>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with us or browse our frequently asked questions.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* FAQ Section */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion items={faqData} />
              </div>

              {/* Additional Help */}
              <div className="mt-6 bg-purple-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Need more help?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Check out our comprehensive documentation and guides:
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="/#features"
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      → View all features
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy"
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      → Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/terms"
                      className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                    >
                      → Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

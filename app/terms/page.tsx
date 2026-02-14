import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import { termsOfServiceContent } from '@/lib/content/terms';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Habit Tracker - Understand your rights and responsibilities.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-20 bg-white">
        <Container size="md">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last Updated: {formatDate(termsOfServiceContent.lastUpdated)}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-purple-50 rounded-2xl">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              {termsOfServiceContent.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-purple-600 hover:text-purple-700 hover:underline"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {termsOfServiceContent.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-4">
                  {section.title}
                </h2>

                {section.content && (
                  <div className="text-gray-700 whitespace-pre-line mb-4">
                    {section.content}
                  </div>
                )}

                {section.items && (
                  <ul className="space-y-3 mb-4">
                    {section.items.map((item, index) => (
                      <li key={index} className="text-gray-700">
                        {typeof item === 'string' ? (
                          item
                        ) : (
                          <>
                            <strong>{item.term}:</strong> {item.description}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="space-y-6">
                    {section.subsections.map((subsection, index) => (
                      <div key={index}>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {subsection.title}
                        </h3>
                        {'content' in subsection && subsection.content && (
                          <p className="text-gray-700 mb-2">{subsection.content}</p>
                        )}
                        {'items' in subsection && subsection.items && (
                          <ul className="space-y-2">
                            {subsection.items.map((item, i) => (
                              <li key={i} className="text-gray-700">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                        {'note' in subsection && subsection.note && (
                          <p className="text-gray-700 italic mt-2">{subsection.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.contactInfo && (
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <ul className="space-y-2">
                      <li>
                        <strong>Email:</strong>{' '}
                        <a
                          href={`mailto:${section.contactInfo.email}`}
                          className="text-purple-600 hover:underline"
                        >
                          {section.contactInfo.email}
                        </a>
                      </li>
                      <li>
                        <strong>Developer:</strong> {section.contactInfo.developer}
                      </li>
                    </ul>
                  </div>
                )}

                {section.note && (
                  <p className="text-gray-700 italic mt-4">{section.note}</p>
                )}
              </section>
            ))}
          </div>

          {/* Acknowledgment */}
          <div className="mt-12 p-6 bg-purple-100 border-2 border-purple-300 rounded-lg">
            <p className="text-gray-800 font-medium text-center">
              {termsOfServiceContent.acknowledgment}
            </p>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

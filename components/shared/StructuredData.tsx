import { APP_CONFIG } from '@/lib/constants';
import { faqData } from '@/lib/content/landing';

export function MobileAppStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: APP_CONFIG.name,
    description: APP_CONFIG.tagline,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: APP_CONFIG.stats.rating,
      ratingCount: APP_CONFIG.stats.activeUsers.replace('+', '000'),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function FAQStructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

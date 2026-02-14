'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Card, { CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import GradientText from '@/components/shared/GradientText';
import { pricingContent } from '@/lib/content/landing';
import { cn } from '@/lib/utils';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-gradient-to-b from-white to-purple-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <GradientText as="span">{pricingContent.headline.split('.')[0]}.</GradientText>{' '}
            {pricingContent.headline.split('.').slice(1).join('.')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-baseline gap-2 mb-4">
                  <CardTitle className="text-2xl">{pricingContent.free.name}</CardTitle>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {pricingContent.free.price}
                  </span>
                  <span className="text-gray-600">/ {pricingContent.free.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {pricingContent.free.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  onClick={() => window.open(pricingContent.free.ctaUrl, '_blank')}
                >
                  {pricingContent.free.cta}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Premium Tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="relative">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="gradient-purple text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              </div>

              <Card variant="glow" className="h-full flex flex-col border-2 border-purple-300">
                <CardHeader>
                  <div className="flex items-baseline gap-2 mb-4">
                    <CardTitle className="text-2xl gradient-text">
                      {pricingContent.premium.name}
                    </CardTitle>
                  </div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-bold gradient-text">
                      {pricingContent.premium.annualPrice}
                    </span>
                    <span className="text-gray-600">/ {pricingContent.premium.annualPeriod}</span>
                  </div>
                  <p className="text-sm text-green-600 font-semibold">
                    {pricingContent.premium.savings}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    or {pricingContent.premium.monthlyPrice}/{pricingContent.premium.period}
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 mb-8 flex-1">
                    {pricingContent.premium.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => window.open(pricingContent.premium.ctaUrl, '_blank')}
                  >
                    {pricingContent.premium.cta}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-600 text-sm">
            Cancel anytime. No questions asked. Your data stays on your device.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import GradientText from '@/components/shared/GradientText';
import { howItWorksContent } from '@/lib/content/landing';
import { cn } from '@/lib/utils';

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-purple-50 to-white">
      <Container size="md">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <GradientText as="span">{howItWorksContent.headline}</GradientText>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-purple-200 hidden md:block" />

          <div className="space-y-8">
            {howItWorksContent.steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full gradient-purple flex items-center justify-center text-white text-2xl font-bold shadow-lg relative z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

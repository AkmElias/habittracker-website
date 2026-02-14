'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import Accordion from '@/components/ui/Accordion';
import GradientText from '@/components/shared/GradientText';
import { faqData } from '@/lib/content/landing';

export default function FAQ() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <Container size="md">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <GradientText as="span">Questions?</GradientText> We've got answers.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion items={faqData} />
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="/support" className="text-purple-600 hover:text-purple-700 font-semibold">
              Contact us
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

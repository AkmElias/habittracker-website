'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import { problemContent } from '@/lib/content/landing';

export default function Problem() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <Container size="md">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            {problemContent.headline}
          </h2>
          <div className="space-y-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {problemContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

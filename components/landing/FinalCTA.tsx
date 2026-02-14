'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import DownloadButton from '@/components/shared/DownloadButton';
import { finalCtaContent } from '@/lib/content/landing';

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-purple" />

      {/* Animated Circles */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-64 h-64 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Container className="relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {finalCtaContent.headline}
          </h2>
          <p className="text-lg md:text-xl text-purple-100 mb-8">
            {finalCtaContent.subheadline}
          </p>
          <div className="flex flex-col items-center gap-4">
            <DownloadButton
              text={finalCtaContent.cta}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-50"
              variant="secondary"
            />
            <p className="text-sm text-purple-200">{finalCtaContent.subtext}</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

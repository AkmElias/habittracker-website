'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Container from '@/components/layout/Container';
import GradientText from '@/components/shared/GradientText';

const screenshots = [
  { src: '/images/screenshots/home.webp', alt: 'Habit Tracker Home Screen' },
  { src: '/images/screenshots/create-habit.webp', alt: 'Create Habit Screen' },
  { src: '/images/screenshots/habit-details.webp', alt: 'Habit Details Screen' },
  { src: '/images/screenshots/stats.webp', alt: 'Statistics Screen' },
  { src: '/images/screenshots/settings.webp', alt: 'Settings Screen' },
  { src: '/images/screenshots/habits-list.webp', alt: 'Habits List Screen' },
  { src: '/images/screenshots/achievements.webp', alt: 'Achievements Screen' },
];

export default function Screenshots() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <Container>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <GradientText as="span">See it in action</GradientText>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Beautiful, intuitive interface designed to make habit tracking effortless.
          </p>
        </motion.div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {screenshots.slice(0, 6).map((screenshot, index) => (
            <motion.div
              key={screenshot.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800"
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex gap-4 pb-4">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.src}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex-shrink-0 w-64 aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-800 relative"
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

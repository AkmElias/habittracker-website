'use client';

import { motion } from 'framer-motion';
import Container from '@/components/layout/Container';
import DownloadButton from '@/components/shared/DownloadButton';
import GradientText from '@/components/shared/GradientText';
import { heroContent } from '@/lib/content/landing';
import { APP_CONFIG } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-teal-50" />
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {heroContent.headline.split(' ').map((word, index) => {
                if (word === 'life' || word === 'habit') {
                  return (
                    <GradientText key={index} as="span">
                      {word}{' '}
                    </GradientText>
                  );
                }
                return <span key={index}>{word} </span>;
              })}
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DownloadButton text={heroContent.ctaText} />
            <p className="text-sm text-gray-500">{heroContent.ctaSubtext}</p>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-purple-200 border-2 border-white flex items-center justify-center text-xs font-semibold text-purple-700"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span>{heroContent.socialProof}</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {APP_CONFIG.stats.habitsCompleted}
              </div>
              <div className="text-sm text-gray-600 mt-1">Habits Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {APP_CONFIG.stats.activeUsers}
              </div>
              <div className="text-sm text-gray-600 mt-1">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {APP_CONFIG.stats.rating}
              </div>
              <div className="text-sm text-gray-600 mt-1">Average Rating</div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

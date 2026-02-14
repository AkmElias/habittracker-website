import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Habit Tracker',
    short_name: 'Habit Tracker',
    description: 'Build Better Habits. Transform Your Life.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6200EE',
    icons: [
      {
        src: '/images/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}

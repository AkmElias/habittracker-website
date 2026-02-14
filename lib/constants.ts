export const APP_CONFIG = {
  name: 'Habit Tracker',
  tagline: 'Build Better Habits. Transform Your Life.',
  supportEmail: 'support@habittracker.app',
  developer: 'AKM Elias',
  pricing: {
    monthly: 2.99,
    annual: 24.99,
  },
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.akmelias.habittracker',
  website: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  stats: {
    habitsCompleted: '2M+',
    activeUsers: '50K+',
    rating: '4.8',
  },
} as const;

export const SOCIAL_LINKS = {
  twitter: '',
  facebook: '',
  instagram: '',
} as const;

export const CONTACT_SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'bug', label: 'Bug Report' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'premium', label: 'Premium Support' },
  { value: 'other', label: 'Other' },
] as const;

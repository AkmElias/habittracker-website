import { APP_CONFIG } from '../constants';

export const heroContent = {
  headline: 'Build the life you want, one habit at a time.',
  subheadline:
    'The habit tracker that uses psychology, not willpower. Track streaks, celebrate milestones, and turn intentions into automatic routines.',
  ctaText: 'Download Free',
  ctaSubtext: 'Available on Google Play',
  socialProof: 'Join 50,000+ people building better habits',
};

export const problemContent = {
  headline: 'Why do habits fail?',
  paragraphs: [
    "You've tried before. Downloaded the app, set ambitious goals, stayed motivated for a week... then life happened.",
    "The problem isn't you. It's your system.",
    "Most habit apps are just digital checkboxes. They track what you do, but don't help you actually do it.",
  ],
};

export const solutionContent = {
  headline: 'HabitTracker is different.',
  subtitle: 'We built HabitTracker on proven behavioral psychology:',
  benefits: [
    {
      title: 'Streak Motivation',
      description:
        "Watch your streak grow. After 7 days, you won't want to break it. After 30, it's part of who you are.",
      icon: 'flame',
    },
    {
      title: 'Streak Freeze',
      description:
        'Life happens. Protect your hard-earned streaks with 2 freeze credits per month. Never lose progress to unexpected events.',
      icon: 'snowflake',
    },
    {
      title: 'Accountability Partners',
      description:
        'Share your habits with trusted partners. Stay motivated together and celebrate each other\'s wins.',
      icon: 'users',
    },
    {
      title: 'Instant Satisfaction',
      description:
        'Every check-off triggers a satisfying animation and haptic feedback. Your brain learns to crave that completion.',
      icon: 'check',
    },
    {
      title: 'Visual Progress',
      description:
        "Beautiful charts show your journey. See how far you've come, not just how far you have to go.",
      icon: 'chart',
    },
    {
      title: 'Smart Reminders',
      description:
        'Get reminded at the right time. Zero friction means maximum consistency.',
      icon: 'bell',
    },
  ],
};

export const featuresContent = {
  headline: 'Everything you need. Nothing you don\'t.',
  free: [
    {
      title: 'Unlimited Habits',
      description: 'Track as many habits as you want',
      icon: 'infinity',
    },
    {
      title: 'Streak Tracking',
      description: 'Build momentum with visible streaks',
      icon: 'flame',
    },
    {
      title: 'Streak Freeze',
      description: 'Protect your streaks when life happens',
      icon: 'snowflake',
    },
    {
      title: 'Advanced Analytics',
      description: '30-day and 90-day charts, trends, insights',
      icon: 'trending-up',
    },
    {
      title: 'Milestone Badges',
      description: 'Celebrate at 7, 30, 100, 365 days',
      icon: 'award',
    },
    {
      title: 'Flexible Scheduling',
      description: 'Daily, weekly, or custom patterns',
      icon: 'calendar',
    },
    {
      title: 'Home Screen Widget',
      description: 'Complete habits without opening the app',
      icon: 'layout',
    },
    {
      title: 'Progress Charts',
      description: '7-day view of your consistency',
      icon: 'chart',
    },
    {
      title: 'Smart Reminders',
      description: 'Never miss a habit again',
      icon: 'bell',
    },
    {
      title: 'Dark Mode',
      description: 'Easy on the eyes, day or night',
      icon: 'moon',
    },
  ],
  premium: [
    {
      title: 'Cloud Backup',
      description: 'Never lose your data. Sync across devices.',
      icon: 'cloud',
    },
    {
      title: 'Accountability Partners',
      description: 'Share habits with partners to stay motivated and accountable',
      icon: 'users',
    },
    {
      title: 'Custom Frequencies',
      description: 'Any schedule (Mon/Wed/Fri, every 3 days)',
      icon: 'settings',
    },
    {
      title: 'Ad-Free',
      description: 'Clean, distraction-free experience',
      icon: 'x-circle',
    },
  ],
};

export const testimonialsContent = {
  headline: 'What users are saying',
  testimonials: [
    {
      quote:
        "Finally, a habit app that doesn't overwhelm me. Simple, beautiful, effective.",
      author: 'Sarah K.',
      detail: '45-day meditation streak',
    },
    {
      quote:
        "The streak feature is addictive in the best way. I'm on day 67 and not stopping!",
      author: 'Michael R.',
      detail: 'morning routine builder',
    },
    {
      quote:
        'Cloud backup saved me when I got a new phone. Worth every penny for premium.',
      author: 'David L.',
      detail: 'premium user since 2025',
    },
  ],
};

export const howItWorksContent = {
  headline: 'Start in 60 seconds',
  steps: [
    {
      number: '1',
      title: 'Download & Create',
      description:
        "Install the app and create your first habit. We'll guide you through it.",
      icon: 'download',
    },
    {
      number: '2',
      title: 'Set Your Reminder',
      description:
        "Choose when you want to be reminded. We'll make sure you don't forget.",
      icon: 'bell',
    },
    {
      number: '3',
      title: 'Build Your Streak',
      description:
        'Check off your habit each day. Watch your streak grow. Feel the momentum.',
      icon: 'flame',
    },
    {
      number: '4',
      title: 'Celebrate Milestones',
      description:
        "Hit 7 days? 30 days? 100 days? We'll celebrate with you.",
      icon: 'trophy',
    },
  ],
};

export const pricingContent = {
  headline: 'Simple pricing. No surprises.',
  free: {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'Unlimited habits',
      'Streak freeze',
      'Advanced analytics',
      'Full widget access',
      '7-day, 30-day & 90-day charts',
      'Smart reminders',
      'Dark mode',
      'Banner ads (non-intrusive)',
    ],
    cta: 'Download Free',
    ctaUrl: APP_CONFIG.playStoreUrl,
  },
  premium: {
    name: 'Premium',
    monthlyPrice: '$2.99',
    annualPrice: '$24.99',
    period: 'month',
    annualPeriod: 'year',
    savings: 'save 30%',
    features: [
      'Everything in Free',
      'Cloud backup & sync',
      'Accountability partners',
      'Custom frequencies',
      'No ads',
    ],
    cta: 'Start 7-Day Free Trial',
    ctaUrl: APP_CONFIG.playStoreUrl,
    highlight: true,
  },
};

export const faqData = [
  {
    question: 'Is HabitTracker really free?',
    answer:
      'Yes! The free tier includes unlimited habits, full widget access, and all core features. No tricks, no artificial limits.',
  },
  {
    question: 'What happens if I miss a day?',
    answer:
      'Your streak resets, but your history is preserved. You can use a Streak Freeze to protect your streak when life happens.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Absolutely. All data is stored locally on your device. Premium cloud backup uses your Google account and is fully encrypted.',
  },
  {
    question: 'Can I use it offline?',
    answer:
      "Yes! The app works completely offline. Cloud sync happens when you're connected.",
  },
  {
    question: 'How do I cancel premium?',
    answer:
      'Manage your subscription in Google Play Store settings. Your data remains on your device after cancellation.',
  },
];

export const finalCtaContent = {
  headline: 'Your future self will thank you.',
  subheadline:
    "Every day you wait is a streak you'll never have. Start building better habits today.",
  cta: 'Download HabitTracker Free',
  subtext: 'No credit card required. No account needed. Just habits.',
};

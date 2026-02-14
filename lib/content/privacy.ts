export const privacyPolicyContent = {
  lastUpdated: 'February 8, 2026',
  effectiveDate: 'February 8, 2026',

  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `Welcome to Habit Tracker ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience using our app. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.

Please read this Privacy Policy carefully. By using Habit Tracker, you agree to the collection and use of information in accordance with this policy.`,
    },
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      subsections: [
        {
          title: '1. Information You Provide Directly',
          content: 'We collect the following information that you provide to us:',
          items: [
            {
              term: 'Habit Data',
              description: 'Names, categories, and settings of habits you create for core app functionality',
            },
            {
              term: 'Completion Records',
              description: 'Dates and times when you mark habits as complete to track your progress and streaks',
            },
            {
              term: 'Reminder Preferences',
              description: 'Times you set for habit reminders to send notifications at your preferred times',
            },
          ],
        },
        {
          title: '2. Information Collected Through Google Sign-In (Optional)',
          content: 'If you choose to use Cloud Backup features, we collect:',
          items: [
            {
              term: 'Display Name',
              description: 'Your Google account name to personalize your experience',
            },
            {
              term: 'Email Address',
              description: 'Your Google account email to identify your account for cloud sync',
            },
            {
              term: 'Profile Photo URL',
              description: 'Your Google profile picture to display in the app (optional)',
            },
          ],
        },
        {
          title: '3. Information Collected Automatically',
          items: [
            {
              term: 'Advertising ID',
              description: 'Android Advertising ID to serve personalized ads (free version)',
            },
            {
              term: 'Device Information',
              description: 'Device type, OS version for app compatibility and crash reporting',
            },
            {
              term: 'Usage Data',
              description: 'App opens, feature usage to improve app experience',
            },
          ],
        },
      ],
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      content: 'We use the collected information for:',
      items: [
        {
          term: 'Core Functionality',
          description: 'Track your habits and streaks, send reminder notifications, and display your progress and statistics',
        },
        {
          term: 'Cloud Sync (Optional)',
          description: 'Backup your data to secure cloud storage, restore your data on new devices, and sync across multiple devices',
        },
        {
          term: 'Advertising (Free Version)',
          description: 'Display relevant advertisements and support free access to the app',
        },
        {
          term: 'App Improvement',
          description: 'Analyze usage patterns, fix bugs and improve performance, and develop new features',
        },
      ],
    },
    {
      id: 'third-party',
      title: 'Third-Party Services',
      content: 'We use the following third-party services:',
      services: [
        {
          name: 'Google Firebase',
          uses: 'Authentication, Cloud Firestore, Cloud Messaging',
          dataShared: 'User ID, habit data (if cloud sync enabled)',
          privacyUrl: 'https://firebase.google.com/support/privacy',
        },
        {
          name: 'Google AdMob',
          uses: 'Banner ads, Interstitial ads, Rewarded ads',
          dataShared: 'Advertising ID, device info',
          privacyUrl: 'https://policies.google.com/privacy',
          note: 'Premium users do not see ads',
        },
        {
          name: 'Google Play Billing',
          uses: 'In-app purchases (Premium subscription)',
          dataShared: 'Purchase transactions (handled by Google)',
          privacyUrl: 'https://policies.google.com/privacy',
        },
      ],
    },
    {
      id: 'data-storage',
      title: 'Data Storage and Security',
      subsections: [
        {
          title: 'Local Storage',
          items: [
            'Your habit data is stored locally on your device using encrypted database storage',
            'Data remains on your device unless you enable Cloud Backup',
          ],
        },
        {
          title: 'Cloud Storage (Optional)',
          items: [
            'If you enable Cloud Backup, your data is stored in Google Firebase (Firestore)',
            'Data is encrypted in transit (TLS/SSL) and at rest',
            'Only you can access your data through your Google account',
          ],
        },
        {
          title: 'Security Measures',
          items: [
            'We use industry-standard encryption',
            'We do not store passwords (Google handles authentication)',
            'We regularly update our security practices',
          ],
        },
      ],
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      items: [
        {
          term: 'Local habit data',
          description: 'Until you delete the app or clear data',
        },
        {
          term: 'Cloud backup data',
          description: 'Until you delete your account or request deletion',
        },
        {
          term: 'Ad-related data',
          description: 'Managed by Google AdMob per their policies',
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      content: 'You can:',
      items: [
        {
          term: 'Access Your Data',
          description: 'View all your habit data within the app and export your data as CSV from Settings',
        },
        {
          term: 'Delete Your Data',
          description: 'Delete individual habits at any time, clear all local data by uninstalling the app, or request cloud data deletion by contacting us',
        },
        {
          term: 'Opt-Out of Personalized Ads',
          description: 'Go to Android Settings > Google > Ads and enable "Opt out of Ads Personalization"',
        },
        {
          term: 'Disable Cloud Sync',
          description: 'Sign out from Settings to stop cloud backup. Your local data will remain on your device',
        },
        {
          term: 'Control Notifications',
          description: 'Disable notifications in Android Settings or remove individual habit reminders in the app',
        },
      ],
    },
    {
      id: 'childrens-privacy',
      title: "Children's Privacy",
      content: 'Habit Tracker is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.',
    },
    {
      id: 'changes',
      title: 'Changes to This Privacy Policy',
      content: `We may update this Privacy Policy from time to time. We will notify you of any changes by:

- Updating the "Last Updated" date at the top
- Displaying an in-app notification for significant changes

We encourage you to review this Privacy Policy periodically.`,
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: 'If you have questions about this Privacy Policy or our privacy practices, please contact us:',
      contactInfo: {
        email: 'support@habittracker.app',
        website: 'https://habittracker.app',
        developer: 'AKM Elias',
      },
    },
    {
      id: 'gdpr',
      title: 'Additional Information for EU/EEA Users (GDPR)',
      content: 'If you are located in the European Union or European Economic Area:',
      items: [
        {
          term: 'Legal Basis',
          description: 'We process your data based on your consent and legitimate interests',
        },
        {
          term: 'Data Controller',
          description: 'AKM Elias',
        },
        {
          term: 'Your Rights',
          description: 'Access, rectification, erasure, restriction, portability, and objection',
        },
        {
          term: 'Supervisory Authority',
          description: 'You may lodge a complaint with your local data protection authority',
        },
      ],
    },
    {
      id: 'ccpa',
      title: 'Additional Information for California Users (CCPA)',
      content: 'If you are a California resident:',
      items: [
        {
          term: 'Right to Know',
          description: 'You can request information about data we collect',
        },
        {
          term: 'Right to Delete',
          description: 'You can request deletion of your personal information',
        },
        {
          term: 'Right to Opt-Out',
          description: 'You can opt out of the sale of personal information',
        },
        {
          term: 'Non-Discrimination',
          description: 'We will not discriminate against you for exercising your rights',
        },
      ],
      note: 'We do not sell your personal information.',
    },
  ],
};

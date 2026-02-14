# Habit Tracker Website

Professional marketing website for the Habit Tracker Android app built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design inspired by Vercel and Linear
- 🎭 Purple gradient branding with smooth animations
- 📱 Fully responsive (mobile-first)
- ♿ Accessible (WCAG AA compliant)
- 🚀 Optimized for performance (Lighthouse > 90)
- 📧 Contact form with email integration (Resend)
- 🔍 SEO optimized with structured data
- 📄 Privacy Policy and Terms of Service pages

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Email:** Resend + React Email
- **Validation:** Zod
- **Image Optimization:** Sharp

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd habittracker-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Resend API key:
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=support@habittracker.app
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Building for Production

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

The custom Node.js server will start on port 3000 (or the port specified in your environment variables).

## Project Structure

```
habittracker-website/
├── app/                      # Next.js App Router pages
│   ├── api/contact/         # Contact form API endpoint
│   ├── privacy/             # Privacy Policy page
│   ├── terms/               # Terms of Service page
│   ├── support/             # Support page
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page
│   ├── sitemap.ts           # Sitemap
│   └── robots.ts            # Robots.txt
├── components/
│   ├── landing/             # Landing page sections
│   ├── layout/              # Header, Footer, Container
│   ├── support/             # Contact form
│   ├── ui/                  # Reusable UI components
│   └── shared/              # Shared components
├── lib/
│   ├── content/             # Content (landing, privacy, terms)
│   ├── constants.ts         # App constants
│   └── utils.ts             # Utility functions
├── emails/                  # Email templates
├── public/
│   └── images/
│       ├── logo.svg         # App logo
│       └── screenshots/     # Optimized WebP screenshots
├── scripts/                 # Build scripts
└── server.js               # Custom Node.js server
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server (custom Node.js server)
- `npm run start:next` - Start production server (Next.js default)
- `npm run lint` - Run ESLint
- `npm run optimize-screenshots` - Optimize app screenshots to WebP

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key for sending emails | Yes |
| `CONTACT_EMAIL` | Email address to receive contact form submissions | Yes |
| `NEXT_PUBLIC_APP_URL` | Public URL of the website | No |
| `PORT` | Server port (default: 3000) | No |
| `HOSTNAME` | Server hostname (default: localhost) | No |

## Deployment

📚 **See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment guide** covering:
- Custom VPS/Droplet hosting (with Nginx, SSL, PM2)
- GitHub Pages (static export)
- Future development workflow
- Troubleshooting and maintenance

### Quick Deploy to VPS

```bash
# Make deploy script executable
chmod +x deploy.sh

# Deploy to your server
./deploy.sh your-server-ip
```

### Quick Start (Custom Server)

This project uses a custom Node.js server (`server.js`):

```bash
npm run build   # Build for production
npm start       # Start server on port 3000
```

For production, use PM2:

```bash
pm2 start server.js --name habittracker-website
pm2 save
pm2 startup
```

## Contact Form Setup

The contact form uses [Resend](https://resend.com) to send emails:

1. Sign up for a free Resend account at https://resend.com
2. Get your API key from https://resend.com/api-keys
3. Add the API key to your `.env.local` file
4. (Optional) Verify your domain in Resend for production use

For development/testing, you can use `onboarding@resend.dev` as the sender email.

## Contributing

This is a private project for the Habit Tracker app. For issues or feature requests, please contact the developer.

## License

© 2026 AKM Elias. All rights reserved.

## Support

For questions or support, email: support@habittracker.app

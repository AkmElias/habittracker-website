# HabitTracker Website Deployment Guide

This guide covers deploying the HabitTracker website to various hosting platforms and managing future updates.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Custom Hosting (VPS/Droplet)](#custom-hosting-vpsdroplet)
3. [GitHub Pages (Static Export)](#github-pages-static-export)
4. [Future Development Workflow](#future-development-workflow)
5. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ Node.js 18+ installed
- ✅ Git installed and configured
- ✅ Resend API key (for contact form)
- ✅ Domain name (optional but recommended)
- ✅ SSH access to your server (for VPS deployment)

---

## Custom Hosting (VPS/Droplet)

### Step 1: Prepare Your VPS

**Connect to your server:**
```bash
ssh root@your-server-ip
```

**Update system packages:**
```bash
apt update && apt upgrade -y
```

**Install Node.js 18+:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
apt install -y nodejs
node --version  # Should show v18+
npm --version
```

**Install PM2 (Process Manager):**
```bash
npm install -g pm2
```

**Install Nginx (Web Server):**
```bash
apt install -y nginx
```

---

### Step 2: Set Up the Application

**Create application directory:**
```bash
mkdir -p /var/www/habittracker-website
cd /var/www/habittracker-website
```

**Clone your repository:**
```bash
# Option 1: If using Git (recommended)
git clone https://github.com/yourusername/habittracker-website.git .

# Option 2: If uploading manually
# Use SCP or SFTP to upload your files
```

**Install dependencies:**
```bash
npm install --production
```

**Create environment file:**
```bash
nano .env.local
```

Add your environment variables:
```env
# Resend API Configuration
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=support@habittracker.app

# App Configuration
NEXT_PUBLIC_APP_URL=https://habittracker.app
NODE_ENV=production
PORT=3000
```

Press `Ctrl+X`, then `Y`, then `Enter` to save.

---

### Step 3: Build the Application

```bash
npm run build
```

This will create an optimized production build in the `.next` folder.

---

### Step 4: Start with PM2

**Start the application:**
```bash
pm2 start server.js --name habittracker-website
```

**Configure PM2 to start on boot:**
```bash
pm2 startup
pm2 save
```

**Useful PM2 commands:**
```bash
pm2 status                    # Check status
pm2 logs habittracker-website # View logs
pm2 restart habittracker-website # Restart app
pm2 stop habittracker-website    # Stop app
pm2 delete habittracker-website  # Remove from PM2
```

---

### Step 5: Configure Nginx Reverse Proxy

**Create Nginx configuration:**
```bash
nano /etc/nginx/sites-available/habittracker-website
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name habittracker.app www.habittracker.app;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**Enable the site:**
```bash
ln -s /etc/nginx/sites-available/habittracker-website /etc/nginx/sites-enabled/
```

**Test Nginx configuration:**
```bash
nginx -t
```

**Restart Nginx:**
```bash
systemctl restart nginx
```

---

### Step 6: Set Up SSL with Let's Encrypt

**Install Certbot:**
```bash
apt install -y certbot python3-certbot-nginx
```

**Get SSL certificate:**
```bash
certbot --nginx -d habittracker.app -d www.habittracker.app
```

Follow the prompts and provide your email address.

**Test auto-renewal:**
```bash
certbot renew --dry-run
```

---

### Step 7: Configure Firewall

```bash
# Allow SSH
ufw allow 22/tcp

# Allow HTTP and HTTPS
ufw allow 80/tcp
ufw allow 443/tcp

# Enable firewall
ufw enable
```

---

### ✅ Deployment Complete!

Your site should now be live at:
- **HTTP:** http://habittracker.app (redirects to HTTPS)
- **HTTPS:** https://habittracker.app

---

## GitHub Pages (Static Export)

⚠️ **Important:** GitHub Pages only supports static sites. Your contact form API won't work unless you use a third-party service.

### Step 1: Configure for Static Export

**Update `next.config.ts`:**
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export
  images: {
    unoptimized: true,  // Required for static export
  },
  // Remove 'standalone' output
};

export default nextConfig;
```

### Step 2: Build Static Site

```bash
npm run build
```

This creates a static site in the `out` directory.

### Step 3: Deploy to GitHub Pages

**Option A: Using GitHub Actions (Recommended)**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_APP_URL: https://yourusername.github.io/habittracker-website

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

**Option B: Manual Deployment**

```bash
# Build the site
npm run build

# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d out"

# Deploy
npm run deploy
```

**Enable GitHub Pages:**
1. Go to repository Settings → Pages
2. Source: Deploy from branch
3. Branch: `gh-pages` / root
4. Save

---

## Future Development Workflow

### Initial Setup

**1. Initialize Git repository (if not already done):**
```bash
cd /Users/elias/projects/habittracker-website
git init
git add .
git commit -m "Initial commit: HabitTracker website"
```

**2. Create GitHub repository:**
```bash
# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/habittracker-website.git
git branch -M main
git push -u origin main
```

---

### Making Changes

**1. Create a feature branch:**
```bash
git checkout -b feature/your-feature-name
```

**2. Make your changes:**
- Edit files in your code editor
- Test locally with `npm run dev`

**3. Test the changes:**
```bash
# Start development server
npm run dev

# Visit http://localhost:3000
# Test all functionality
```

**4. Commit your changes:**
```bash
git add .
git commit -m "Add: description of your changes"
```

**5. Push to GitHub:**
```bash
git push origin feature/your-feature-name
```

---

### Deploying Updates to Production

#### For VPS/Droplet Hosting:

**Method 1: Manual Deployment**
```bash
# SSH into your server
ssh root@your-server-ip

# Navigate to app directory
cd /var/www/habittracker-website

# Pull latest changes
git pull origin main

# Install new dependencies (if any)
npm install --production

# Rebuild the application
npm run build

# Restart with PM2
pm2 restart habittracker-website

# Check status
pm2 status
pm2 logs habittracker-website --lines 50
```

**Method 2: Automated Deployment Script**

Create `deploy.sh` on your local machine:
```bash
#!/bin/bash

echo "🚀 Deploying to production..."

# SSH into server and deploy
ssh root@your-server-ip << 'ENDSSH'
cd /var/www/habittracker-website
git pull origin main
npm install --production
npm run build
pm2 restart habittracker-website
echo "✅ Deployment complete!"
ENDSSH
```

Make it executable and run:
```bash
chmod +x deploy.sh
./deploy.sh
```

**Method 3: GitHub Actions (Automated)**

Create `.github/workflows/deploy-vps.yml`:
```yaml
name: Deploy to VPS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to VPS
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USERNAME }}
          key: ${{ secrets.VPS_SSH_KEY }}
          script: |
            cd /var/www/habittracker-website
            git pull origin main
            npm install --production
            npm run build
            pm2 restart habittracker-website
```

Add secrets in GitHub: Settings → Secrets → Actions:
- `VPS_HOST`: Your server IP
- `VPS_USERNAME`: SSH username (usually `root`)
- `VPS_SSH_KEY`: Your SSH private key

---

### Development Best Practices

**1. Always work on branches:**
```bash
# Create feature branch
git checkout -b feature/new-feature

# Create bugfix branch
git checkout -b fix/bug-description
```

**2. Keep commits atomic and descriptive:**
```bash
git commit -m "Add: accountability partners to pricing section"
git commit -m "Fix: smart quote parsing error in landing.ts"
git commit -m "Update: move streak freeze to free features"
```

**3. Test before deploying:**
```bash
# Run build locally to catch errors
npm run build

# Test production build
npm start
```

**4. Use environment variables:**
- Never commit `.env.local` to Git
- Keep `.env.example` updated as a template
- Update production `.env.local` on server when needed

**5. Backup before major changes:**
```bash
# On server, create backup
cd /var/www
tar -czf habittracker-backup-$(date +%Y%m%d).tar.gz habittracker-website/
```

---

### Common Development Tasks

**Update content:**
```bash
# 1. Edit content files
nano lib/content/landing.ts

# 2. Test locally
npm run dev

# 3. Commit and push
git add lib/content/landing.ts
git commit -m "Update: pricing information"
git push origin main

# 4. Deploy to production
./deploy.sh
```

**Add new dependencies:**
```bash
# 1. Install locally
npm install package-name

# 2. Test
npm run dev

# 3. Commit package.json and package-lock.json
git add package.json package-lock.json
git commit -m "Add: package-name for new feature"
git push origin main

# 4. Deploy (script will run npm install)
./deploy.sh
```

**Update environment variables:**
```bash
# On server
ssh root@your-server-ip
cd /var/www/habittracker-website
nano .env.local
# Make changes
pm2 restart habittracker-website
```

---

## Troubleshooting

### Site not loading

```bash
# Check PM2 status
pm2 status

# Check logs
pm2 logs habittracker-website --lines 100

# Check Nginx status
systemctl status nginx

# Check Nginx error log
tail -f /var/log/nginx/error.log
```

### Build errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Contact form not working

```bash
# Check environment variables
cat .env.local

# Verify Resend API key
# Test with: curl https://api.resend.com/emails -H "Authorization: Bearer YOUR_API_KEY"

# Check API logs
pm2 logs habittracker-website | grep "contact"
```

### SSL certificate issues

```bash
# Renew certificates
certbot renew

# Force renewal
certbot renew --force-renewal

# Check certificate status
certbot certificates
```

### Port already in use

```bash
# Find process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or stop PM2
pm2 stop habittracker-website
```

---

## Monitoring and Maintenance

### Monitor with PM2

```bash
# Real-time monitoring
pm2 monit

# Check resource usage
pm2 list
```

### Set up log rotation

```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

### Regular backups

Create a backup script `backup.sh`:
```bash
#!/bin/bash
BACKUP_DIR="/root/backups"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR
tar -czf $BACKUP_DIR/habittracker-$DATE.tar.gz /var/www/habittracker-website

# Keep only last 7 backups
ls -t $BACKUP_DIR/habittracker-*.tar.gz | tail -n +8 | xargs rm -f
```

Add to cron for daily backups:
```bash
crontab -e
# Add: 0 2 * * * /root/backup.sh
```

---

## Quick Reference

### Common Commands

```bash
# Local Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run linter

# Server Management
pm2 start server.js --name habittracker-website  # Start
pm2 restart habittracker-website                 # Restart
pm2 stop habittracker-website                    # Stop
pm2 logs habittracker-website                    # View logs
pm2 monit                                        # Monitor

# Nginx
systemctl restart nginx   # Restart Nginx
nginx -t                  # Test configuration
systemctl status nginx    # Check status

# Git
git status                # Check status
git add .                 # Stage changes
git commit -m "message"   # Commit
git push origin main      # Push to GitHub
git pull origin main      # Pull from GitHub
```

---

## Support

For issues or questions:
- **Email:** support@habittracker.app
- **GitHub Issues:** Create an issue in the repository

---

**Last Updated:** February 14, 2026

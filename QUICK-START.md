# Quick Start: Deploy to habittracker.akmelias.com

Your server: **103.174.50.84**
Your subdomain: **habittracker.akmelias.com**

---

## Step 1: Add DNS A Record (Do This First!)

Go to your DNS management panel for **akmelias.com** and add:

```
Type: A
Host/Name: habittracker
Value/Points to: 103.174.50.84
TTL: 3600
```

**Wait 5-30 minutes** for DNS to propagate, then verify:
```bash
nslookup habittracker.akmelias.com
# Should return: 103.174.50.84
```

---

## Step 2: SSH to Your Server

```bash
ssh root@103.174.50.84
```

---

## Step 3: Run Installation Script

Copy and paste this entire script into your server terminal:

```bash
#!/bin/bash

echo "🚀 Installing HabitTracker Website..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
echo "📦 Installing PM2..."
sudo npm install -g pm2

# Install Nginx
echo "📦 Installing Nginx..."
sudo apt install -y nginx

# Install Certbot for SSL
echo "📦 Installing Certbot..."
sudo apt install -y certbot python3-certbot-nginx

# Install Git
echo "📦 Installing Git..."
sudo apt install -y git

# Create project directory
echo "📂 Creating project directory..."
sudo mkdir -p /var/www/habittracker-website
sudo chown -R $USER:$USER /var/www/habittracker-website

echo "✅ Installation complete!"
echo ""
echo "📝 Next steps:"
echo "1. Upload your project files to /var/www/habittracker-website"
echo "2. Configure environment variables"
echo "3. Build and start the application"
```

---

## Step 4: Upload Your Project Files

**Option A: Manual Upload (Recommended for first deployment)**

On your local machine:
```bash
# Navigate to project
cd /Users/elias/projects/habittracker-website

# Create tarball (excluding node_modules and build files)
tar -czf habittracker-website.tar.gz \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  --exclude=.env.local \
  .

# Upload to server
scp habittracker-website.tar.gz root@103.174.50.84:/var/www/habittracker-website/

# Clean up local tarball
rm habittracker-website.tar.gz
```

On your server:
```bash
# Extract files
cd /var/www/habittracker-website
tar -xzf habittracker-website.tar.gz
rm habittracker-website.tar.gz
```

**Option B: Git Clone (If you pushed to GitHub)**

On your server:
```bash
cd /var/www/habittracker-website
git clone https://github.com/YOUR_USERNAME/habittracker-website.git .
```

---

## Step 5: Configure Environment Variables

On your server:
```bash
# Create .env.local file
nano /var/www/habittracker-website/.env.local
```

Paste this content (replace RESEND_API_KEY with your actual key):
```env
# Resend API Key for contact form emails
# Get your key from https://resend.com/api-keys
RESEND_API_KEY=re_your_actual_api_key_here

# Contact email address where form submissions will be sent
CONTACT_EMAIL=support@habittracker.app

# Public app URL
NEXT_PUBLIC_APP_URL=https://habittracker.akmelias.com

# Server configuration
PORT=3000
HOSTNAME=localhost
NODE_ENV=production
```

Save and exit: **Ctrl+X**, then **Y**, then **Enter**

---

## Step 6: Build and Start Application

On your server:
```bash
cd /var/www/habittracker-website

# Install dependencies
npm install --production

# Build the application
npm run build

# Start with PM2
pm2 start server.js --name habittracker-website

# Save PM2 process list
pm2 save

# Setup PM2 to start on boot
pm2 startup
# IMPORTANT: Run the command it outputs!
```

---

## Step 7: Configure Nginx

On your server:
```bash
# Create Nginx config
sudo nano /etc/nginx/sites-available/habittracker
```

Paste this configuration:
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name habittracker.akmelias.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /_next/static {
        proxy_cache STATIC;
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location /images {
        proxy_cache STATIC;
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=86400";
    }
}

proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:10m inactive=7d use_temp_path=off;
```

Save and exit: **Ctrl+X**, then **Y**, then **Enter**

Enable the configuration:
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/habittracker /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Enable Nginx on boot
sudo systemctl enable nginx
```

---

## Step 8: Test HTTP Access

Open your browser and visit:
```
http://habittracker.akmelias.com
```

You should see your HabitTracker website! (No HTTPS yet)

---

## Step 9: Setup SSL Certificate (HTTPS)

On your server:
```bash
# Get SSL certificate
sudo certbot --nginx -d habittracker.akmelias.com
```

Follow the prompts:
1. Enter your email address
2. Agree to terms of service (Y)
3. Share email with EFF (optional)
4. **Choose option 2** to redirect HTTP to HTTPS

**That's it!** Your website is now live at:
```
🌐 https://habittracker.akmelias.com
```

---

## Step 10: Verify Everything Works

Check these:
- [ ] Visit https://habittracker.akmelias.com
- [ ] Click through all pages (/, /privacy, /terms, /support)
- [ ] Test contact form (should receive email)
- [ ] Check mobile view (resize browser)
- [ ] Verify HTTPS padlock shows in browser

---

## Common Commands

```bash
# View logs
pm2 logs habittracker-website

# Restart app
pm2 restart habittracker-website

# Check status
pm2 status

# View Nginx errors
sudo tail -f /var/log/nginx/error.log

# Check SSL certificate
sudo certbot certificates
```

---

## Future Deployments

When you make changes to your code:

**Method 1: Manual**
```bash
# On local machine
cd /Users/elias/projects/habittracker-website
tar -czf habittracker-website.tar.gz --exclude=node_modules --exclude=.next --exclude=.git .
scp habittracker-website.tar.gz root@103.174.50.84:/var/www/habittracker-website/
rm habittracker-website.tar.gz

# On server
ssh root@103.174.50.84
cd /var/www/habittracker-website
tar -xzf habittracker-website.tar.gz
rm habittracker-website.tar.gz
npm install --production
npm run build
pm2 restart habittracker-website
```

**Method 2: Using Deploy Script (If you set up Git)**
```bash
# On local machine
cd /Users/elias/projects/habittracker-website
./deploy.sh
# Script will automatically deploy to 103.174.50.84
```

---

## Troubleshooting

### Website Not Loading
```bash
# Check if app is running
pm2 status

# Check logs
pm2 logs habittracker-website

# Restart if needed
pm2 restart habittracker-website
```

### DNS Not Working
```bash
# Check DNS
nslookup habittracker.akmelias.com

# Wait longer (can take up to 24 hours)
# Verify A record is saved in DNS panel
```

### SSL Certificate Failed
```bash
# Make sure DNS is working first!
# Then retry:
sudo certbot --nginx -d habittracker.akmelias.com
```

---

## Security Setup (Recommended)

```bash
# Setup firewall
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable

# Keep system updated
sudo apt update && sudo apt upgrade -y
```

---

## Summary

✅ DNS: habittracker.akmelias.com → 103.174.50.84
✅ Server: Node.js + PM2 + Nginx
✅ SSL: Automatic with Let's Encrypt
✅ Website: https://habittracker.akmelias.com

**You're all set!** 🎉

# Setting Up habittracker.akmelias.com Subdomain

This guide walks you through setting up your HabitTracker website on a subdomain.

## Prerequisites

- Domain: akmelias.com with DNS management access
- VPS/Droplet with your server IP address
- SSH access to your VPS

---

## Step 1: Add DNS A Record

1. **Log into your DNS management panel** (shown in your screenshot)

2. **Add a new A record:**
   ```
   Type: A
   Host/Name: habittracker
   Value/Points to: YOUR_VPS_IP_ADDRESS
   TTL: 3600 (or default)
   ```

   Example:
   ```
   Type: A
   Name: habittracker
   Value: 123.45.67.89  ← Replace with your actual VPS IP
   TTL: 3600
   ```

3. **Save the DNS record**

4. **Wait for DNS propagation** (5-60 minutes)

   Check if it's working:
   ```bash
   # On your local machine
   nslookup habittracker.akmelias.com

   # Should return your VPS IP address
   ```

---

## Step 2: Deploy Website to VPS

### 2.1 Connect to Your VPS

```bash
ssh root@YOUR_VPS_IP
```

### 2.2 Install Required Software

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Install Certbot for SSL
sudo apt install -y certbot python3-certbot-nginx

# Install Git
sudo apt install -y git
```

### 2.3 Create Project Directory

```bash
# Create web directory
sudo mkdir -p /var/www/habittracker-website

# Set ownership to current user
sudo chown -R $USER:$USER /var/www/habittracker-website

# Navigate to directory
cd /var/www/habittracker-website
```

### 2.4 Clone Your Repository

Option A: Using Git (recommended)
```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/habittracker-website.git .

# Or if you haven't pushed to GitHub yet, see Option B
```

Option B: Manual Upload
```bash
# On your local machine, compress the project
cd /Users/elias/projects/habittracker-website
tar -czf habittracker-website.tar.gz \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  .

# Upload to VPS
scp habittracker-website.tar.gz root@YOUR_VPS_IP:/var/www/habittracker-website/

# On VPS, extract
cd /var/www/habittracker-website
tar -xzf habittracker-website.tar.gz
rm habittracker-website.tar.gz
```

### 2.5 Configure Environment Variables

```bash
# Create .env.local file
nano /var/www/habittracker-website/.env.local
```

Add the following content:
```env
# Resend API Key for contact form emails
# Get your key from https://resend.com/api-keys
RESEND_API_KEY=re_your_actual_api_key_here

# Contact email address where form submissions will be sent
CONTACT_EMAIL=support@habittracker.app

# Public app URL - IMPORTANT: Use your subdomain
NEXT_PUBLIC_APP_URL=https://habittracker.akmelias.com

# Server configuration
PORT=3000
HOSTNAME=localhost
NODE_ENV=production
```

Save and exit (Ctrl+X, then Y, then Enter)

### 2.6 Build and Start the Application

```bash
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
# Follow the instructions it outputs
```

---

## Step 3: Configure Nginx

### 3.1 Create Nginx Configuration

```bash
# Create Nginx config file
sudo nano /etc/nginx/sites-available/habittracker
```

Paste the following configuration:
```nginx
# HTTP server - will redirect to HTTPS after SSL is set up
server {
    listen 80;
    listen [::]:80;
    server_name habittracker.akmelias.com;

    # Proxy to Next.js app
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

    # Cache static files
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

# Cache configuration
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=STATIC:10m inactive=7d use_temp_path=off;
```

Save and exit (Ctrl+X, then Y, then Enter)

### 3.2 Enable the Configuration

```bash
# Create symbolic link to enable site
sudo ln -s /etc/nginx/sites-available/habittracker /etc/nginx/sites-enabled/

# Remove default site if it exists
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# If test passes, reload Nginx
sudo systemctl reload nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx
```

### 3.3 Test HTTP Access

Open your browser and visit:
```
http://habittracker.akmelias.com
```

You should see your HabitTracker website (without HTTPS yet).

---

## Step 4: Setup SSL Certificate (HTTPS)

### 4.1 Get SSL Certificate with Certbot

```bash
# Run Certbot to get SSL certificate
sudo certbot --nginx -d habittracker.akmelias.com

# Follow the prompts:
# - Enter your email address
# - Agree to terms of service
# - Choose whether to redirect HTTP to HTTPS (recommended: Yes)
```

Certbot will automatically:
- Generate SSL certificates
- Update your Nginx configuration
- Set up auto-renewal

### 4.2 Test SSL Certificate

Visit your website with HTTPS:
```
https://habittracker.akmelias.com
```

You should see:
- 🔒 Secure padlock in browser
- Your HabitTracker website loads correctly

### 4.3 Verify Auto-Renewal

```bash
# Test automatic renewal
sudo certbot renew --dry-run

# If successful, certificates will auto-renew before expiry
```

---

## Step 5: Update Local Environment for Development

On your local machine, update `.env.local`:

```bash
cd /Users/elias/projects/habittracker-website
nano .env.local
```

Change:
```env
# For local development, keep localhost
NEXT_PUBLIC_APP_URL=http://localhost:3000

# For production builds, use:
# NEXT_PUBLIC_APP_URL=https://habittracker.akmelias.com
```

---

## Step 6: Future Deployments

### Option A: Manual Deployment

When you make changes:

```bash
# On your local machine
cd /Users/elias/projects/habittracker-website

# SSH to VPS and update
ssh root@YOUR_VPS_IP << 'ENDSSH'
  cd /var/www/habittracker-website
  git pull origin main  # If using Git
  npm install --production
  npm run build
  pm2 restart habittracker-website
ENDSSH
```

### Option B: Using Deploy Script

If you set up the deploy script:

```bash
# On local machine
cd /Users/elias/projects/habittracker-website

# Make deploy.sh executable
chmod +x deploy.sh

# Update deploy.sh with your server details
nano deploy.sh
# Set SERVER_IP and SERVER_USER

# Deploy with one command
./deploy.sh
```

---

## Verification Checklist

- [ ] DNS A record added for habittracker.akmelias.com
- [ ] DNS resolves to your VPS IP (test with `nslookup`)
- [ ] Website accessible via HTTP (http://habittracker.akmelias.com)
- [ ] SSL certificate installed successfully
- [ ] Website accessible via HTTPS (https://habittracker.akmelias.com)
- [ ] Contact form works (sends emails)
- [ ] All pages load correctly (/, /privacy, /terms, /support)
- [ ] Mobile responsive design works
- [ ] Images load correctly
- [ ] PM2 process running (`pm2 status`)
- [ ] Nginx running (`sudo systemctl status nginx`)

---

## Troubleshooting

### DNS Not Resolving

```bash
# Check DNS propagation
nslookup habittracker.akmelias.com

# If not working:
# - Wait longer (can take up to 24 hours, usually 5-60 minutes)
# - Verify A record was saved correctly in DNS panel
# - Check TTL value (lower = faster propagation)
```

### Website Not Loading

```bash
# Check if PM2 process is running
pm2 status

# Check logs
pm2 logs habittracker-website

# Restart if needed
pm2 restart habittracker-website

# Check if port 3000 is listening
sudo netstat -tlnp | grep 3000
```

### Nginx Errors

```bash
# Check Nginx status
sudo systemctl status nginx

# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### SSL Certificate Issues

```bash
# Check certificate status
sudo certbot certificates

# Renew manually if needed
sudo certbot renew

# Check Nginx SSL configuration
sudo nano /etc/nginx/sites-available/habittracker
```

### Contact Form Not Working

```bash
# Check environment variables
cat /var/www/habittracker-website/.env.local

# Verify RESEND_API_KEY is set
# Verify CONTACT_EMAIL is correct
# Check logs for errors
pm2 logs habittracker-website
```

---

## Quick Command Reference

```bash
# View website logs
pm2 logs habittracker-website

# Restart website
pm2 restart habittracker-website

# Check website status
pm2 status

# View Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Reload Nginx (after config changes)
sudo systemctl reload nginx

# Check SSL certificate expiry
sudo certbot certificates

# Update website (if using Git)
cd /var/www/habittracker-website && git pull && npm install && npm run build && pm2 restart habittracker-website
```

---

## Security Recommendations

1. **Setup Firewall (UFW)**
   ```bash
   sudo ufw allow 22    # SSH
   sudo ufw allow 80    # HTTP
   sudo ufw allow 443   # HTTPS
   sudo ufw enable
   ```

2. **Disable Root SSH Login**
   ```bash
   # Create a new user first, then:
   sudo nano /etc/ssh/sshd_config
   # Set: PermitRootLogin no
   sudo systemctl restart sshd
   ```

3. **Keep System Updated**
   ```bash
   sudo apt update && sudo apt upgrade -y
   ```

4. **Monitor Logs Regularly**
   ```bash
   pm2 logs
   sudo tail -f /var/log/nginx/access.log
   ```

---

## Summary

Your HabitTracker website is now live at **https://habittracker.akmelias.com**!

**What you set up:**
- ✅ DNS subdomain (habittracker.akmelias.com)
- ✅ VPS deployment with Node.js + PM2
- ✅ Nginx reverse proxy
- ✅ SSL certificate (HTTPS)
- ✅ Automatic SSL renewal
- ✅ Production-ready environment

**Next steps:**
- Share your website link with users
- Submit to Google Play Store (privacy/terms URLs now live)
- Monitor traffic and form submissions
- Keep the server updated and secure

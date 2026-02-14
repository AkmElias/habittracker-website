#!/bin/bash

# HabitTracker Website Deployment Script
# Usage: ./deploy.sh [server-ip]

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration
SERVER_IP="${1:-103.174.50.84}"
SERVER_USER="root"
APP_DIR="/var/www/habittracker-website"
APP_NAME="habittracker-website"

echo -e "${GREEN}🚀 Starting deployment to ${SERVER_IP}...${NC}"

# Check if server IP is provided
if [ "$SERVER_IP" = "103.174.50.84" ] && [ -z "$1" ]; then
    echo -e "${YELLOW}ℹ️  Using default server IP: ${SERVER_IP}${NC}"
    echo "   (You can override with: ./deploy.sh [custom-ip])"
fi

# Test SSH connection
echo -e "${YELLOW}📡 Testing SSH connection...${NC}"
if ! ssh -o ConnectTimeout=5 ${SERVER_USER}@${SERVER_IP} exit 2>/dev/null; then
    echo -e "${RED}❌ Cannot connect to server. Please check:${NC}"
    echo "  - Server IP is correct"
    echo "  - SSH key is configured"
    echo "  - Server is running"
    exit 1
fi

echo -e "${GREEN}✓ SSH connection successful${NC}"

# Deploy to server
echo -e "${YELLOW}📦 Deploying application...${NC}"

ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
    set -e  # Exit on error

    echo "📂 Navigating to app directory..."
    cd /var/www/habittracker-website

    echo "📥 Pulling latest changes from Git..."
    git pull origin main

    echo "📦 Installing dependencies..."
    npm install --production

    echo "🔨 Building application..."
    npm run build

    echo "🔄 Restarting application with PM2..."
    pm2 restart habittracker-website

    echo "✅ Deployment complete!"

    echo ""
    echo "📊 Application Status:"
    pm2 status habittracker-website

    echo ""
    echo "📝 Recent logs:"
    pm2 logs habittracker-website --lines 10 --nostream
ENDSSH

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Deployment successful!${NC}"
    echo -e "${GREEN}🌐 Your site should be live at: https://habittracker.akmelias.com${NC}"
else
    echo ""
    echo -e "${RED}❌ Deployment failed. Check the logs above for details.${NC}"
    exit 1
fi

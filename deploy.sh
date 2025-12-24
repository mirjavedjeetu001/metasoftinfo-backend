#!/bin/bash

# MetaSoft Backend Deployment Script
# Usage: bash deploy.sh

set -e  # Exit on error

echo "🚀 Starting MetaSoft Backend Deployment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check if .env file exists
if [ ! -f .env ]; then
    echo -e "${RED}❌ Error: .env file not found!${NC}"
    echo "Please create .env file with required variables"
    exit 1
fi

echo -e "${GREEN}✓ Environment file found${NC}"

# Step 2: Install dependencies
echo -e "${YELLOW}📦 Installing dependencies...${NC}"
npm install

# Step 3: Build the application
echo -e "${YELLOW}🔨 Building application...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Build failed - dist directory not created${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build successful${NC}"

# Step 4: Stop existing PM2 process
echo -e "${YELLOW}⏸️  Stopping existing process...${NC}"
pm2 stop metasoft-backend 2>/dev/null || echo "No existing process to stop"
pm2 delete metasoft-backend 2>/dev/null || echo "No existing process to delete"

# Step 5: Start with PM2
echo -e "${YELLOW}▶️  Starting application with PM2...${NC}"
pm2 start ecosystem.config.js --env production

# Step 6: Save PM2 configuration
echo -e "${YELLOW}💾 Saving PM2 configuration...${NC}"
pm2 save

# Step 7: Show status
echo -e "${GREEN}✓ Deployment complete!${NC}"
echo ""
pm2 status
echo ""

# Step 8: Show logs tail
echo -e "${YELLOW}📋 Recent logs:${NC}"
pm2 logs metasoft-backend --lines 20 --nostream

echo ""
echo -e "${GREEN}✅ Deployment successful!${NC}"
echo ""
echo "Useful commands:"
echo "  - View logs: pm2 logs metasoft-backend"
echo "  - Check status: pm2 status"
echo "  - Monitor: pm2 monit"
echo "  - Restart: pm2 restart metasoft-backend"
echo ""
echo "Health check URLs:"
echo "  - https://metasoftinfo.com/metasoft-backend/health"
echo "  - https://metasoftinfo.com/metasoft-backend/health/db"

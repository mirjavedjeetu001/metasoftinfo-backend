#!/bin/bash
# Production Hotfix Script for cPanel
# Run this directly on your production server

echo "🚨 MetaSoft Backend Production Hotfix"
echo "======================================"

# Check current directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in backend directory"
    echo "Please cd to your backend directory first"
    exit 1
fi

echo "✓ Current directory: $(pwd)"
echo ""

# Step 1: Stop current application
echo "1. Stopping current application..."
if command -v pm2 &> /dev/null; then
    pm2 stop all 2>/dev/null || true
    echo "✓ PM2 processes stopped"
else
    # Kill node processes
    pkill -f "node.*main" || true
    echo "✓ Node processes killed"
fi

# Step 2: Install PM2 if needed
if ! command -v pm2 &> /dev/null; then
    echo "2. Installing PM2..."
    npm install pm2 || npm install -g pm2 || {
        echo "❌ Failed to install PM2"
        exit 1
    }
fi
echo "✓ PM2 available"

# Step 3: Create ecosystem.config.js if missing
if [ ! -f "ecosystem.config.js" ]; then
    echo "3. Creating ecosystem.config.js..."
    cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'metasoft-backend',
    script: './dist/main.js',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    error_file: './logs/error.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    env_production: {
      NODE_ENV: 'production',
    },
    kill_timeout: 5000,
    wait_ready: true,
    listen_timeout: 10000,
    min_uptime: '10s',
    max_restarts: 10,
    restart_delay: 4000,
    exp_backoff_restart_delay: 100,
  }]
};
EOF
    echo "✓ ecosystem.config.js created"
else
    echo "3. ecosystem.config.js already exists"
fi

# Step 4: Create logs directory
mkdir -p logs
echo "✓ Logs directory ready"

# Step 5: Rebuild application
echo "4. Rebuilding application..."
npm install
npm run build || {
    echo "❌ Build failed"
    exit 1
}
echo "✓ Build successful"

# Step 6: Start with PM2
echo "5. Starting application with PM2..."
pm2 delete metasoft-backend 2>/dev/null || true
pm2 start ecosystem.config.js --env production
pm2 save

echo ""
echo "✅ HOTFIX DEPLOYED!"
echo ""
pm2 status
echo ""
echo "Check logs: pm2 logs metasoft-backend"
echo "Monitor: pm2 monit"
echo ""
echo "Test health: curl http://localhost:\$(grep PORT .env | cut -d= -f2 || echo 3000)/health"

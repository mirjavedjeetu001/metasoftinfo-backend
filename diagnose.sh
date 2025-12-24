#!/bin/bash

# MetaSoft Backend Diagnostics
# Run this script to diagnose 503 errors

echo "🔍 MetaSoft Backend Diagnostics Report"
echo "========================================"
echo ""

# Check if PM2 is running
echo "1️⃣ PM2 Status:"
echo "-------------------"
if command -v pm2 &> /dev/null; then
    pm2 list
    echo ""
    echo "PM2 is installed ✓"
else
    echo "❌ PM2 is NOT installed"
    echo "Install with: npm install -g pm2"
fi
echo ""

# Check port usage
echo "2️⃣ Port Usage (3000-3010):"
echo "-------------------"
for port in {3000..3010}; do
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        echo "Port $port: IN USE ⚠️"
        lsof -Pi :$port -sTCP:LISTEN
    fi
done
echo ""

# Check memory usage
echo "3️⃣ Memory Usage:"
echo "-------------------"
free -h 2>/dev/null || echo "free command not available"
echo ""

# Check Node processes
echo "4️⃣ Node.js Processes:"
echo "-------------------"
ps aux | grep node | grep -v grep || echo "No Node.js processes found"
echo ""

# Check disk space
echo "5️⃣ Disk Space:"
echo "-------------------"
df -h . | tail -1
echo ""

# Check if .env exists
echo "6️⃣ Configuration Files:"
echo "-------------------"
if [ -f .env ]; then
    echo ".env file: EXISTS ✓"
    echo "Environment variables set:"
    grep -E "^[A-Z_]+" .env | cut -d= -f1 | sed 's/^/  - /'
else
    echo ".env file: MISSING ❌"
fi

if [ -f ecosystem.config.js ]; then
    echo "ecosystem.config.js: EXISTS ✓"
else
    echo "ecosystem.config.js: MISSING ❌"
fi

if [ -d dist ]; then
    echo "dist/ directory: EXISTS ✓"
else
    echo "dist/ directory: MISSING ❌ (run: npm run build)"
fi
echo ""

# Check MySQL connectivity
echo "7️⃣ Database Connectivity:"
echo "-------------------"
if [ -f .env ]; then
    DB_HOST=$(grep DATABASE_HOST .env | cut -d= -f2)
    DB_PORT=$(grep DATABASE_PORT .env | cut -d= -f2)
    DB_USER=$(grep DATABASE_USER .env | cut -d= -f2)
    DB_NAME=$(grep DATABASE_NAME .env | cut -d= -f2)
    
    if command -v mysql &> /dev/null; then
        echo "Testing MySQL connection to $DB_HOST:$DB_PORT..."
        timeout 5 mysql -h "$DB_HOST" -P "$DB_PORT" -u "$DB_USER" -p"$(grep DATABASE_PASSWORD .env | cut -d= -f2)" -e "SELECT 1" 2>&1 | grep -q "ERROR" && echo "❌ Connection FAILED" || echo "✓ Connection successful"
    else
        echo "MySQL client not available for testing"
    fi
else
    echo "Cannot test - .env file missing"
fi
echo ""

# Check recent logs
echo "8️⃣ Recent PM2 Logs (last 10 lines):"
echo "-------------------"
if command -v pm2 &> /dev/null; then
    pm2 logs metasoft-backend --lines 10 --nostream 2>/dev/null || echo "No logs available or app not running"
else
    echo "PM2 not installed"
fi
echo ""

# Health check
echo "9️⃣ Health Check (if app is running):"
echo "-------------------"
if [ -f .env ]; then
    PORT=$(grep PORT .env | cut -d= -f2 || echo "3000")
    echo "Testing http://localhost:$PORT/health"
    curl -s "http://localhost:$PORT/health" 2>/dev/null && echo "" || echo "❌ Health check failed or app not running"
else
    echo "Cannot test - .env file missing"
fi
echo ""

# Recommendations
echo "📋 Recommendations:"
echo "-------------------"
ISSUES=0

if ! command -v pm2 &> /dev/null; then
    echo "⚠️ Install PM2: npm install -g pm2"
    ISSUES=$((ISSUES+1))
fi

if [ ! -f .env ]; then
    echo "⚠️ Create .env file with database credentials"
    ISSUES=$((ISSUES+1))
fi

if [ ! -d dist ]; then
    echo "⚠️ Build the application: npm run build"
    ISSUES=$((ISSUES+1))
fi

if [ $ISSUES -eq 0 ]; then
    echo "✓ All checks passed!"
fi

echo ""
echo "========================================"
echo "Diagnostic report complete"
echo ""
echo "For deployment, run: bash deploy.sh"
echo "For troubleshooting guide, see: TROUBLESHOOTING-503.md"

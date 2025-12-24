module.exports = {
  apps: [{
    name: 'metasoft-backend',
    script: './dist/main.js',
    instances: 1, // Don't use cluster mode in cPanel - single instance
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '500M', // Restart if memory exceeds 500MB (adjust based on cPanel limits)
    error_file: './logs/error.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    
    // Environment variables
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000, // Change this to your assigned port
    },
    
    // Graceful shutdown
    kill_timeout: 5000,
    wait_ready: true,
    listen_timeout: 10000,
    
    // Restart strategies
    min_uptime: '10s', // App must run for at least 10s to be considered started
    max_restarts: 10, // Max restart attempts
    restart_delay: 4000, // Wait 4s before restart
    
    // Exponential backoff restart delay
    exp_backoff_restart_delay: 100,
  }]
};

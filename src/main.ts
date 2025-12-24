import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.FRONTEND_URL || 'http://localhost:5173',
      credentials: true,
    },
    logger: ['error', 'warn', 'log'], // Add logging
  });
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
      transform: true,
    }),
  );

  // Enable graceful shutdown
  app.enableShutdownHooks();

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 Backend running on port ${port}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`💾 Database: ${process.env.DATABASE_NAME || 'metasoftinfo'}`);

  // Graceful shutdown handlers for cPanel/PM2
  process.on('SIGTERM', async () => {
    console.log('⚠️ SIGTERM received, closing application gracefully...');
    await app.close();
    process.exit(0);
  });

  process.on('SIGINT', async () => {
    console.log('⚠️ SIGINT received, closing application gracefully...');
    await app.close();
    process.exit(0);
  });
}

bootstrap().catch((err) => {
  console.error('❌ Failed to start application:', err);
  process.exit(1);
});

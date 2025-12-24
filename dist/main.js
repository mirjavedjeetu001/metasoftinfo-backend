"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: {
            origin: process.env.FRONTEND_URL || 'http://localhost:5173',
            credentials: true,
        },
        logger: ['error', 'warn', 'log'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidUnknownValues: true,
        transform: true,
    }));
    app.enableShutdownHooks();
    const port = process.env.PORT ?? 3000;
    await app.listen(port);
    console.log(`🚀 Backend running on port ${port}`);
    console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`💾 Database: ${process.env.DATABASE_NAME || 'metasoftinfo'}`);
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
//# sourceMappingURL=main.js.map
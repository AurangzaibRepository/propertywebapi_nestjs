import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'log'],
  });
  app.useLogger(app.get(Logger));
  app.setGlobalPrefix('api/v1');
  await app.listen(process.env.PORT || 8000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from './logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'log'],
  });
  app.useLogger(app.get(Logger));

  // Set global prefix for all routes
  app.setGlobalPrefix('api');

  // Apply global pipes
  // If we do not set here, we need to set in every Body decorator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT || 8000);
}
bootstrap();

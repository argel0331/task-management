import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());  // Validation pipe on a global level will save a lot of code at a controller level
  await app.listen(3000);
}
bootstrap();

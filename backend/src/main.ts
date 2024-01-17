import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'images'), {
    prefix: '/files/',
  });
  // const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  //
  await app.listen(5000);
}
bootstrap();

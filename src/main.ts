import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('abx')
    .setDescription('abx asgnmnt api')
    .setVersion('1.0')
    .build();

  const doc = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, doc);

  await app.listen(3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { V1Module } from './v1/v1.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const cors = {
    origin: [
      'http://localhost:9876',
      'http://localhost:4200',
      'http://localhost:4000',
      'http://localhost:4201',
      '*',
    ],
    'Access-Control-Allow-Origin': '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: [
      'Accept',
      'Content-Type',
      'Authorization',
    ]
  };
  app.enableCors(cors);

  // app.useGlobalInterceptors(new ErrorsInterceptor());
  const options = new DocumentBuilder()
  .setTitle('Conversion App API')
  .setDescription('API to convert basic units')
  .setVersion('1.0')
  .addTag('Conversion')
  .build();

  const v1Document = SwaggerModule.createDocument(app, options, {
    include: [V1Module],
  });
  SwaggerModule.setup('docs/api/v1/', app, v1Document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();

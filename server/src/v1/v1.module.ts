import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { baseUrl } from './routes';
import { V1Controller } from './controllers/v1/v1.controller';
import { ConversionModule } from './modules/conversion/conversion.module';
import { ConversionController } from './controllers/conversion/conversion.controller';

@Module({
  imports: [
   ConversionModule
  ],
  controllers: [
    V1Controller,
    ConversionController
  ],
  exports: []
})
export class V1Module implements NestModule {
    configure(consumer: MiddlewareConsumer){
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({ path: baseUrl, method: RequestMethod.ALL })
    }
}

import { Module } from '@nestjs/common';
import { ConversionService } from './services/conversion/conversion.service';

@Module({
    providers: [ConversionService],
    exports: [ConversionService]
})
export class ConversionModule {}

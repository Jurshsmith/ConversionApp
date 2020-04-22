import { Controller, Get, Param, Post, Body, UseInterceptors } from '@nestjs/common';
import { conversionUrl } from '../../../v1/routes';
import { IConvert } from '../../interfaces/convert.interface';
import { ErrorsInterceptor } from '../../interceptors/errors.interceptor';
import { ConversionService } from '../../modules/conversion/services/conversion/conversion.service';

@Controller(conversionUrl)
@UseInterceptors(new ErrorsInterceptor())
export class ConversionController {
    constructor(private readonly conversionService: ConversionService){}

    @Post()
    convert(@Body() payload: IConvert){
        return this.conversionService.determineIfCorrect(payload);
    }
}

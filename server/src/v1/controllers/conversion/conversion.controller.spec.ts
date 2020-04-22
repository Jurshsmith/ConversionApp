import { Test, TestingModule } from '@nestjs/testing';
import { ConversionController } from './conversion.controller';
import { ConversionService } from '../../modules/conversion/services/conversion/conversion.service';
import {  validPayloads, invalids } from '../../mocks/payloads.mocks';

describe('Conversion Controller', () => {
  let controller: ConversionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConversionController],
      providers: [ConversionService]
    }).compile();

    controller = module.get<ConversionController>(ConversionController);
  });

  
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('rejects only invalid payloads', async () => {
    const responses = await Promise.all(
      invalids.map(payload => controller.convert(payload))
    );
    
    responses.forEach(response => {
      expect(response.message).toEqual('invalid');
    });
  });


  it('accepts only valid payloads', async () => {
    const responses = await Promise.all(
      validPayloads.map(payload => controller.convert(payload))
    );
    
    responses.forEach(response => {
      expect(response.message).toMatch(/(^correct$)|(^incorrect$)/gi);
    });
  });

});

import { Test, TestingModule } from '@nestjs/testing';
import { ConversionService } from './conversion.service';
import { validPayloads, invalidPayloads } from '../../../../mocks/payloads.mocks';

describe('ConversionService', () => {
  let service: ConversionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConversionService],
    }).compile();

    service = module.get<ConversionService>(ConversionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should handle uppercase payloads', async () => {
      const res = await service.determineIfCorrect(validPayloads[3]);
      expect(res.message).toEqual("correct");
  });

  it('should handle white spacing in all payloads data', async () => {
    const res = await service.determineIfCorrect(validPayloads[4]);
    expect(res.message).toEqual("correct");
  });

  it('should return "correct" if approximately(to 1 dp) correct', async () => {
    let res = await service.determineIfCorrect(validPayloads[5]);
    expect(res.message).toEqual("correct");
    res = await service.determineIfCorrect(validPayloads[6]);
    expect(res.message).toEqual("correct");
    res = await service.determineIfCorrect(validPayloads[7]);
    expect(res.message).toEqual("correct");
    res = await service.determineIfCorrect(validPayloads[8]);
    expect(res.message).toEqual("correct");
   
  });

  it('should return "incorrect" if approximately(to 1 dp) not correct', async () => {
    let res = await service.determineIfCorrect(invalidPayloads[8]);
    expect(res.message).toEqual("incorrect");
    res = await service.determineIfCorrect(invalidPayloads[9]);
    expect(res.message).toEqual("incorrect");
    res = await service.determineIfCorrect(invalidPayloads[10]);
    expect(res.message).toEqual("incorrect");
    res = await service.determineIfCorrect(invalidPayloads[11]);
    expect(res.message).toEqual("incorrect");
    res = await service.determineIfCorrect(invalidPayloads[12]);
    expect(res.message).toEqual("incorrect");
    
  });

  it('should return "invalid" for mapping from temperature to volume unit mapping and vice versa', async () => {
    let res = await service.determineIfCorrect(invalidPayloads[0]);
    expect(res.message).toEqual("invalid");
    res = await service.determineIfCorrect(invalidPayloads[0]);
    expect(res.message).toEqual("invalid");
  });

  it('should work for exact answer', async () => {
    const res = await service.determineIfCorrect(validPayloads[8]);
    expect(res.message).toEqual("correct");
  })

  it('should work for 0 values', async () => {
    let res = await service.determineIfCorrect(validPayloads[8]);
    expect(res.message).toEqual("correct");
    res = await service.determineIfCorrect(validPayloads[9]);
    expect(res.message).toEqual("correct");
  });  

});

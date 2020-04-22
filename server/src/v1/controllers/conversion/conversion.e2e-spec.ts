import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ConversionModule } from '../../modules/conversion/conversion.module';
import { ConversionService } from '../../modules/conversion/services/conversion/conversion.service';
import { conversionUrl } from '../../routes/index';
import { ConversionController } from './conversion.controller';
import { validPayloads, invalidPayloads } from '../../mocks/payloads.mocks';

describe('Convert Route', () => {
  let app: INestApplication;
  // let conversionService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ConversionModule],
      controllers: [ConversionController],
      providers: [ConversionService]
    })
      // .overrideProvider(ConversionService)
      // .useValue(conversionService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/POST convert`, async () => {
    return await request(app.getHttpServer())
      .post(`/${conversionUrl}`)
      .send(validPayloads[0])
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)
      .expect({ status: 200, message: 'correct', isSuccess: true });
  });
  
  it(`avoids invalid payloads`, async () => {

    return await request(app.getHttpServer())
    .post(`/${conversionUrl}`)
    .send(invalidPayloads[0])
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
    .expect({ status: 406, message: 'invalid', isSuccess: false });

  });

  afterAll(async () => {
    await app.close();
  });
});
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Controller } from './v1/controllers/v1/v1.controller';

describe('AppController', () => {
  let appController: V1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController, V1Controller],
      providers: [AppService],
    }).compile();

    appController = app.get<V1Controller>(V1Controller);
  });

  describe('V1 application', () => {
    it('should return "Hello World!"', () => {
      expect(appController.sendWelcomeMessage().message)
      .toBe("Welcome to Conversion App API");
    });
  });
});

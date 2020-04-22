import { TestBed } from '@angular/core/testing';

import { ConversionService } from './conversion.service';
import { correctPayload, incorrectPayload, emptyPayload, invalidPayload } from 'src/app/shared/mocks/payloads.mocks';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('ConversionService', () => {
  let service: ConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: []
    });
    service = TestBed.inject(ConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('return "correct" response on correct payload',
  (done: DoneFn) => {
    service.isValid(correctPayload).subscribe(value => {
      console.log('sercvie', value);

      expect(value.message).toBe('correct');
      done();
    });
  });

  it('return "incorrect" response on incorrect payload',
  (done: DoneFn) => {
    service.isValid(incorrectPayload).subscribe(value => {
      console.log('sercvie', value);

      expect(value.message).toBe('incorrect');
      done();
    });
  });

  it('return "invalid" response on invalid payload',
  (done: DoneFn) => {
    service.isValid(invalidPayload).subscribe(value => {
      console.log('sercvie', value);
      expect(value.message).toBe('invalid');
      done();
    });
  });

  it('returns empty message response on syntactically invalid payload or on errors',
  (done: DoneFn) => {
    service.isValid(emptyPayload).subscribe(value => {
      expect(value.message).toBe('');
      done();
    });
  });
});

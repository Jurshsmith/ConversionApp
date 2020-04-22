import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionComponent } from './conversion.component';
import { ConversionService } from '../../services/conversion.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

describe('ConversionComponent', () => {
  let component: ConversionComponent;
  let fixture: ComponentFixture<ConversionComponent>;

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
        HttpClientModule
      ],
      providers: [ConversionService],
      declarations: [ ConversionComponent ],
     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log('conversion component', component)
    expect(component).toBeDefined();
  });

  
});

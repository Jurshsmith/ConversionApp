import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OutputComponent } from './output.component';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an header called Output', () => {
    const outputElement : HTMLElement = fixture.nativeElement;
    expect(outputElement.querySelector('h2').textContent).toEqual('Output')
  })
});

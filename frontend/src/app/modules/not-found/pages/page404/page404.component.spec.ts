import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404Component } from './page404.component';

describe('Page404Component', () => {
  let component: Page404Component;
  let fixture: ComponentFixture<Page404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an header to display not found', () => {
    const outputElement : HTMLElement = fixture.nativeElement;
    expect(outputElement.querySelector('h1').textContent)
    .toEqual(`404! Page doesn't exist`);
  })
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComplexComponent } from './about-complex.component';

describe('AboutComplexComponent', () => {
  let component: AboutComplexComponent;
  let fixture: ComponentFixture<AboutComplexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutComplexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

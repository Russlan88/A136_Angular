import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentTechnologyComponent } from './development-technology.component';

describe('DevelopmentTechnologyComponent', () => {
  let component: DevelopmentTechnologyComponent;
  let fixture: ComponentFixture<DevelopmentTechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentTechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentTechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

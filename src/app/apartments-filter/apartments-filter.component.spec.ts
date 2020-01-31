import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsFilterComponent } from './apartments-filter.component';

describe('ApartmentsFilterComponent', () => {
  let component: ApartmentsFilterComponent;
  let fixture: ComponentFixture<ApartmentsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

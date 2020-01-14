import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByeConditionsComponent } from './bye-conditions.component';

describe('ByeConditionsComponent', () => {
  let component: ByeConditionsComponent;
  let fixture: ComponentFixture<ByeConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByeConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByeConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

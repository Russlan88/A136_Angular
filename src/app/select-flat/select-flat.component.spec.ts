import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFlatComponent } from './select-flat.component';

describe('SelectFlatComponent', () => {
  let component: SelectFlatComponent;
  let fixture: ComponentFixture<SelectFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

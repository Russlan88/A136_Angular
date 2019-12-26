import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyDimComponent } from './ready-dim.component';

describe('ReadyDimComponent', () => {
  let component: ReadyDimComponent;
  let fixture: ComponentFixture<ReadyDimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadyDimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyDimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

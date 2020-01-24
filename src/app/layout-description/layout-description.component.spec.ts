import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDescriptionComponent } from './layout-description.component';


describe('LayoutDescriptionComponent', () => {
  let component: LayoutDescriptionComponent;
  let fixture: ComponentFixture<LayoutDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutDescriptionComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


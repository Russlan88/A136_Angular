import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingProcessComponent } from './building-process.component';

describe('BuildingProcessComponent', () => {
  let component: BuildingProcessComponent;
  let fixture: ComponentFixture<BuildingProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingProcessSeptemberComponent } from './building-process-september.component';

describe('BuildingProcessSeptemberComponent', () => {
  let component: BuildingProcessSeptemberComponent;
  let fixture: ComponentFixture<BuildingProcessSeptemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingProcessSeptemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingProcessSeptemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

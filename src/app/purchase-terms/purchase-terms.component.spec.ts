import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseTermsComponent } from './purchase-terms.component';

describe('PurchaseTermsComponent', () => {
  let component: PurchaseTermsComponent;
  let fixture: ComponentFixture<PurchaseTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

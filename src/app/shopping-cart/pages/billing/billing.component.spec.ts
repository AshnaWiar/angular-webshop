import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingPageComponent } from './billing.component';

describe('BillingComponent', () => {
  let component: BillingPageComponent;
  let fixture: ComponentFixture<BillingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationStepComponent } from './quotation-step.component';

describe('QuotationStepComponent', () => {
  let component: QuotationStepComponent;
  let fixture: ComponentFixture<QuotationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationStepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationHeaderComponent } from './quotation-header.component';

describe('QuotationHeaderComponent', () => {
  let component: QuotationHeaderComponent;
  let fixture: ComponentFixture<QuotationHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

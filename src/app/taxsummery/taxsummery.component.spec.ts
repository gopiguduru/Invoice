import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxsummeryComponent } from './taxsummery.component';

describe('TaxsummeryComponent', () => {
  let component: TaxsummeryComponent;
  let fixture: ComponentFixture<TaxsummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxsummeryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxsummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

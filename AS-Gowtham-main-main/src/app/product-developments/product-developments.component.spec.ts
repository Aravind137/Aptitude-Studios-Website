import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDevelopmentsComponent } from './product-developments.component';

describe('ProductDevelopmentsComponent', () => {
  let component: ProductDevelopmentsComponent;
  let fixture: ComponentFixture<ProductDevelopmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDevelopmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDevelopmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

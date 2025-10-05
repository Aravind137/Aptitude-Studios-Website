import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RngCertificateComponent } from './rng-certificate.component';

describe('RngCertificateComponent', () => {
  let component: RngCertificateComponent;
  let fixture: ComponentFixture<RngCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RngCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RngCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

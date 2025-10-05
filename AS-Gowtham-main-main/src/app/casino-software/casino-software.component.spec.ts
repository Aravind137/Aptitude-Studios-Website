import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoSoftwareComponent } from './casino-software.component';

describe('CasinoSoftwareComponent', () => {
  let component: CasinoSoftwareComponent;
  let fixture: ComponentFixture<CasinoSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoSoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

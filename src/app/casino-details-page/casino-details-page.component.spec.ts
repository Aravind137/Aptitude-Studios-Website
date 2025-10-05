import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoDetailsPageComponent } from './casino-details-page.component';

describe('CasinoDetailsPageComponent', () => {
  let component: CasinoDetailsPageComponent;
  let fixture: ComponentFixture<CasinoDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

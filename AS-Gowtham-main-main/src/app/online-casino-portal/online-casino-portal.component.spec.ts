import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCasinoPortalComponent } from './online-casino-portal.component';

describe('OnlineCasinoPortalComponent', () => {
  let component: OnlineCasinoPortalComponent;
  let fixture: ComponentFixture<OnlineCasinoPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineCasinoPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineCasinoPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileappWebdevComponent } from './mobileapp-webdev.component';

describe('MobileappWebdevComponent', () => {
  let component: MobileappWebdevComponent;
  let fixture: ComponentFixture<MobileappWebdevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileappWebdevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileappWebdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

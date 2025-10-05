import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAppDevComponent } from './mobile-app-dev.component';

describe('MobileAppDevComponent', () => {
  let component: MobileAppDevComponent;
  let fixture: ComponentFixture<MobileAppDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAppDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileAppDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

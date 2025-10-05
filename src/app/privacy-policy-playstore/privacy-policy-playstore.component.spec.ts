import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyPlaystoreComponent } from './privacy-policy-playstore.component';

describe('PrivacyPolicyPlaystoreComponent', () => {
  let component: PrivacyPolicyPlaystoreComponent;
  let fixture: ComponentFixture<PrivacyPolicyPlaystoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyPlaystoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyPlaystoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

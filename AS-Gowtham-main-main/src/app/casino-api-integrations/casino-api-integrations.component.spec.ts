import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoApiIntegrationsComponent } from './casino-api-integrations.component';

describe('CasinoApiIntegrationsComponent', () => {
  let component: CasinoApiIntegrationsComponent;
  let fixture: ComponentFixture<CasinoApiIntegrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinoApiIntegrationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinoApiIntegrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

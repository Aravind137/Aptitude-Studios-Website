import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesWalletDevelopComponent } from './exchanges-wallet-develop.component';

describe('ExchangesWalletDevelopComponent', () => {
  let component: ExchangesWalletDevelopComponent;
  let fixture: ComponentFixture<ExchangesWalletDevelopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangesWalletDevelopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangesWalletDevelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

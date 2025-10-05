import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftBlockchainComponent } from './nft-blockchain.component';

describe('NftBlockchainComponent', () => {
  let component: NftBlockchainComponent;
  let fixture: ComponentFixture<NftBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftBlockchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaverseBlockchainComponent } from './metaverse-blockchain.component';

describe('MetaverseBlockchainComponent', () => {
  let component: MetaverseBlockchainComponent;
  let fixture: ComponentFixture<MetaverseBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaverseBlockchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaverseBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

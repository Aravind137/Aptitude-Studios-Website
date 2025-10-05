import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Play2earnBlockchainComponent } from './play2earn-blockchain.component';

describe('Play2earnBlockchainComponent', () => {
  let component: Play2earnBlockchainComponent;
  let fixture: ComponentFixture<Play2earnBlockchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Play2earnBlockchainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Play2earnBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

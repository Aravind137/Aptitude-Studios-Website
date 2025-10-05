import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDevelopmentComponent } from './nft-development.component';

describe('NftDevelopmentComponent', () => {
  let component: NftDevelopmentComponent;
  let fixture: ComponentFixture<NftDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftDevelopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

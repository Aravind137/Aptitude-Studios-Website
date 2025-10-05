import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaverseGamingComponent } from './metaverse-gaming.component';

describe('MetaverseGamingComponent', () => {
  let component: MetaverseGamingComponent;
  let fixture: ComponentFixture<MetaverseGamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaverseGamingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaverseGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

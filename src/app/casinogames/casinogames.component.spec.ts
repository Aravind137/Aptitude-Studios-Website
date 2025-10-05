import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinogamesComponent } from './casinogames.component';

describe('CasinogamesComponent', () => {
  let component: CasinogamesComponent;
  let fixture: ComponentFixture<CasinogamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasinogamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasinogamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

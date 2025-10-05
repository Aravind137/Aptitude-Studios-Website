import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitygamesComponent } from './unitygames.component';

describe('UnitygamesComponent', () => {
  let component: UnitygamesComponent;
  let fixture: ComponentFixture<UnitygamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitygamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitygamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArVrGamesComponent } from './ar-vr-games.component';

describe('ArVrGamesComponent', () => {
  let component: ArVrGamesComponent;
  let fixture: ComponentFixture<ArVrGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArVrGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArVrGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

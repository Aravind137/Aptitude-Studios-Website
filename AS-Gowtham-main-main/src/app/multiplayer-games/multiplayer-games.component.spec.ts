import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerGamesComponent } from './multiplayer-games.component';

describe('MultiplayerGamesComponent', () => {
  let component: MultiplayerGamesComponent;
  let fixture: ComponentFixture<MultiplayerGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplayerGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplayerGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

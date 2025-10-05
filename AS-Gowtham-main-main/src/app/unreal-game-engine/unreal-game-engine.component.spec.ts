import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnrealGameEngineComponent } from './unreal-game-engine.component';

describe('UnrealGameEngineComponent', () => {
  let component: UnrealGameEngineComponent;
  let fixture: ComponentFixture<UnrealGameEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnrealGameEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnrealGameEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

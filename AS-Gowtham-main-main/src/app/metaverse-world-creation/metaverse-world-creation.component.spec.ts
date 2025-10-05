import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaverseWorldCreationComponent } from './metaverse-world-creation.component';

describe('MetaverseWorldCreationComponent', () => {
  let component: MetaverseWorldCreationComponent;
  let fixture: ComponentFixture<MetaverseWorldCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaverseWorldCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaverseWorldCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

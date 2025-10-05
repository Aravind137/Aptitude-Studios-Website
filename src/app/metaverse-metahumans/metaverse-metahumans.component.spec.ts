import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaverseMetahumansComponent } from './metaverse-metahumans.component';

describe('MetaverseMetahumansComponent', () => {
  let component: MetaverseMetahumansComponent;
  let fixture: ComponentFixture<MetaverseMetahumansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaverseMetahumansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaverseMetahumansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

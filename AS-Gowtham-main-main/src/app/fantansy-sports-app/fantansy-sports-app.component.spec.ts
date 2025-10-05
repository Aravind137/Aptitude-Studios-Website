import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantansySportsAppComponent } from './fantansy-sports-app.component';

describe('FantansySportsAppComponent', () => {
  let component: FantansySportsAppComponent;
  let fixture: ComponentFixture<FantansySportsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FantansySportsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FantansySportsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

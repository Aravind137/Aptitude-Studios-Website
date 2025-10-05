import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetahumanDevelopmentsComponent } from './metahuman-developments.component';

describe('MetahumanDevelopmentsComponent', () => {
  let component: MetahumanDevelopmentsComponent;
  let fixture: ComponentFixture<MetahumanDevelopmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetahumanDevelopmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetahumanDevelopmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

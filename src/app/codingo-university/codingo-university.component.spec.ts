import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingoUniversityComponent } from './codingo-university.component';

describe('CodingoUniversityComponent', () => {
  let component: CodingoUniversityComponent;
  let fixture: ComponentFixture<CodingoUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingoUniversityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingoUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

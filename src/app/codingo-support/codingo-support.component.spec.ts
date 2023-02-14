import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingoSupportComponent } from './codingo-support.component';

describe('CodingoSupportComponent', () => {
  let component: CodingoSupportComponent;
  let fixture: ComponentFixture<CodingoSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodingoSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingoSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

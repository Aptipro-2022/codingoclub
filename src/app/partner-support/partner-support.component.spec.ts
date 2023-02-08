import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSupportComponent } from './partner-support.component';

describe('PartnerSupportComponent', () => {
  let component: PartnerSupportComponent;
  let fixture: ComponentFixture<PartnerSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

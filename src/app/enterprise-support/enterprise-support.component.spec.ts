import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSupportComponent } from './enterprise-support.component';

describe('EnterpriseSupportComponent', () => {
  let component: EnterpriseSupportComponent;
  let fixture: ComponentFixture<EnterpriseSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

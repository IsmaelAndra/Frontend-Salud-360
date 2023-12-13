import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentFinishComponent } from './appointment-finish.component';

describe('AppointmentFinishComponent', () => {
  let component: AppointmentFinishComponent;
  let fixture: ComponentFixture<AppointmentFinishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentFinishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

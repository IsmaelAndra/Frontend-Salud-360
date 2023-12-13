import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainScreenDoctorComponent } from './main-screen-doctor.component';

describe('MainScreenDoctorComponent', () => {
  let component: MainScreenDoctorComponent;
  let fixture: ComponentFixture<MainScreenDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainScreenDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainScreenDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

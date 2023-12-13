import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMedicalhistoryComponent } from './user-medicalhistory.component';

describe('UserMedicalhistoryComponent', () => {
  let component: UserMedicalhistoryComponent;
  let fixture: ComponentFixture<UserMedicalhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMedicalhistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMedicalhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

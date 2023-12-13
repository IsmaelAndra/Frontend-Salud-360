import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPacientesComponent } from './user-pacientes.component';

describe('UserPacientesComponent', () => {
  let component: UserPacientesComponent;
  let fixture: ComponentFixture<UserPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

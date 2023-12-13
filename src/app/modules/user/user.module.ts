import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserProfleComponent } from './user-profle/user-profle.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserAppointmentComponent } from './user-appointment/user-appointment.component';
import { UserPacientesComponent } from './user-pacientes/user-pacientes.component';
import { UserMedicalhistoryComponent } from './user-medicalhistory/user-medicalhistory.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [

    UserProfleComponent,
       UserHomeComponent,
       UserAppointmentComponent,
       UserPacientesComponent,
       UserMedicalhistoryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink
  ]
})
export class UserModule { }

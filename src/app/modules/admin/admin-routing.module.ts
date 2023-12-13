import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDoctorListComponent } from './admin-doctor-list/admin-doctor-list.component';
import { AdminExamComponent } from './admin-exam/admin-exam.component';
import { ProfileDoctorComponent } from '../doctor/profile-doctor/profile-doctor.component';
import { AdminOfficesComponent } from './admin-offices/admin-offices.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminPatientsComponent } from './admin-patients/admin-patients.component';
import { AppointmentHomeComponent } from '../appointment/appointment-home/appointment-home.component';
import { AdminAppointmentComponent } from './admin-appointment/admin-appointment.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'admin', pathMatch: 'full', redirectTo: 'admin-home'},
      { path: 'admin-home', component: AdminHomeComponent },
      { path: 'admin-doctors', component: AdminDoctorListComponent },
      { path: 'admin-appointment', component: AdminAppointmentComponent },
      { path: 'admin-users', component: AdminUsersComponent },
      { path: 'admin-patients', component: AdminPatientsComponent },
      { path: 'admin-offices', component: AdminOfficesComponent },
      { path: 'admin-profile', component: AdminProfileComponent },
      { path: 'admin-exam', component: AdminExamComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfleComponent } from './user-profle/user-profle.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserAppointmentComponent } from './user-appointment/user-appointment.component';
import { UserMedicalhistoryComponent } from './user-medicalhistory/user-medicalhistory.component';

const routes: Routes = [
  {
    path: '',
    children:
      [
        {path: 'user', pathMatch: 'full', redirectTo: 'user-home'},
        {path: 'user-home', component:UserHomeComponent },
        {path: 'user-profile', component: UserProfleComponent },
        {path: 'user-appointment', component: UserAppointmentComponent},
        {path: 'user-medical', component: UserMedicalhistoryComponent },
        {path: 'user-medical', component: UserMedicalhistoryComponent }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

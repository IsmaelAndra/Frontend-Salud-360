import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDoctorComponent } from './profile-doctor/profile-doctor.component';
import { MainScreenDoctorComponent } from './main-screen-doctor/main-screen-doctor.component';
import { MedicalHistoryListComponent } from './medical-history-list/medical-history-list.component';
import { MedicalHistoryRecordComponent } from './medical-history-record/medical-history-record.component';

const routes: Routes = [
  {
    path: '',
    children:
      [
        {path: 'doctor', pathMatch: 'full', redirectTo: 'doctor-home'},
        {path: 'doctor-home', component: MainScreenDoctorComponent},
        {path: 'doctor-profile', component: ProfileDoctorComponent },
        {path: 'doctor-list', component: MedicalHistoryListComponent},
        {path: 'doctor-record', component: MedicalHistoryRecordComponent }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }

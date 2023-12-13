import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileDoctorComponent } from './profile-doctor/profile-doctor.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { MainScreenDoctorComponent } from './main-screen-doctor/main-screen-doctor.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MainScreenDoctorComponent,
    ProfileDoctorComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule
  ]
})
export class DoctorModule { }

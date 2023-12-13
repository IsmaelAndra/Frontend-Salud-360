import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDoctorListComponent } from './admin-doctor-list/admin-doctor-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminAppointmentComponent } from './admin-appointment/admin-appointment.component';
import { AdminOfficesComponent } from './admin-offices/admin-offices.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminExamComponent } from './admin-exam/admin-exam.component';
import { SharedModule } from "../../shared/shared.module";
import { AdminPatientsComponent } from './admin-patients/admin-patients.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        AdminDoctorListComponent,
        AdminHomeComponent,
        AdminUsersComponent,
        AdminAppointmentComponent,
        AdminOfficesComponent,
        AdminProfileComponent,
        AdminExamComponent,
        AdminPatientsComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }

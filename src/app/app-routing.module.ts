import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { DoctorRoutingModule } from './modules/doctor/doctor-routing.module';
import { AppointmentRoutingModule } from './modules/appointment/appointment-routing.module';
import { NotFoundRoutingModule } from './modules/not-found/notfound-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { AdminRoutingModule } from './modules/admin/admin-routing.module';
import { UserRoutingModule } from './modules/user/user-routing.module';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'doctor', loadChildren: () => import('./modules/doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'appointment', loadChildren: () => import('./modules/appointment/appointment.module').then(m => m.AppointmentModule) },
  { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    HomeRoutingModule,
    DoctorRoutingModule,
    UserRoutingModule,
    AppointmentRoutingModule,
    AdminRoutingModule,
    NotFoundRoutingModule,

  ],
  exports: [RouterModule,]
})
export class AppRoutingModule { }

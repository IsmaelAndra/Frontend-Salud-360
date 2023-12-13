import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentHomeComponent } from './appointment-home/appointment-home.component';
import { AppointmentPayComponent } from './appointment-pay/appointment-pay.component';
import { AppointmentFinishComponent } from './appointment-finish/appointment-finish.component';

const routes: Routes = [
      {
        path: '',
        children:
          [
            {path: 'appointment', pathMatch: 'full', redirectTo: 'appointment-home'},
            { path: 'appointment-home', component: AppointmentHomeComponent },
            { path: 'appointment-pay', component: AppointmentPayComponent },
            { path: 'appointment-finish', component: AppointmentFinishComponent },
          ]
      }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }

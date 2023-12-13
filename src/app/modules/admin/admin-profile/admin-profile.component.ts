import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  see = false;

  openSeeModal() {
    (document.querySelector("#seeDoctorModal") as HTMLElement).classList.remove("hidden");
    (document.querySelector("#seeDoctorModal") as HTMLElement).classList.add("flex");
    this.see = true;
  }

  closeSeeModal() {
    (document.querySelector("#seeDoctorModal") as HTMLElement).classList.add("hidden");
    (document.querySelector("#seeDoctorModal") as HTMLElement).classList.remove("flex");
    this.see = false;
  }

  edit = false;
}

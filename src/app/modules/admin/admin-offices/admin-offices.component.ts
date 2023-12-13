import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-offices',
  templateUrl: './admin-offices.component.html',
  styleUrls: ['./admin-offices.component.css']
})
export class AdminOfficesComponent {
  new = false;

  openNewModal() {
    (document.querySelector("#newDoctorModal") as HTMLElement).classList.remove("hidden");
    (document.querySelector("#newDoctorModal") as HTMLElement).classList.add("flex");
    this.new = true;
  }

  closeNewModal() {
    (document.querySelector("#newDoctorModal") as HTMLElement).classList.add("hidden");
    (document.querySelector("#newDoctorModal") as HTMLElement).classList.remove("flex");
    this.new = false;
  }

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

  openEditModal() {

    (document.querySelector("#seeDoctorModal") as HTMLElement).classList.add("hidden");
    (document.querySelector("#seeDoctorModal") as HTMLElement).classList.remove("flex");
    (document.querySelector("#editDoctorModal") as HTMLElement).classList.remove("hidden");
    (document.querySelector("#editDoctorModal") as HTMLElement).classList.add("flex");
    this.see = false;
    this.edit = true;
  }

  closeEditModal() {
    (document.querySelector("#editDoctorModal") as HTMLElement).classList.add("hidden");
    (document.querySelector("#editDoctorModal") as HTMLElement).classList.remove("flex");
    (document.querySelector("#seeDoctorModal") as HTMLElement).classList.remove("hidden");
    (document.querySelector("#seeDoctorModal") as HTMLElement).classList.add("flex");
    this.see = true;
    this.see = false;
  }
}

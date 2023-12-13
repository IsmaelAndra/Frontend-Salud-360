import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-patients',
  templateUrl: './admin-patients.component.html',
  styleUrls: ['./admin-patients.component.css']
})
export class AdminPatientsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


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

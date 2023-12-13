import { Component, OnInit } from '@angular/core';
import { DoctorModel } from '../../doctor/entities/doctor.entity';
import { DoctorService } from '../../doctor/services/doctor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-doctor-list',
  templateUrl: './admin-doctor-list.component.html',
  styleUrls: ['./admin-doctor-list.component.css']
})
export class AdminDoctorListComponent implements OnInit {
  doctors: DoctorModel[] = [];

  selectedDoctor: DoctorModel = {
    id_doctor: 0,
    startime_doctor: '',
    departime_doctor: '',
    speciality: {
      id_speciality: 0,
      name_speciality: '',
      description_speciality: ''
    },
    user: {
      id_user: 0,
      photo_user: '',
      name_user: '',
      username: '',
      lastname_user: '',
      dateofbirth_user: new Date(),
      gender_user: '',
      address_user: '',
      phone_user: 0,
      email_user: '',
      password: '',
      pass_verification_user: '',
      rol: {
        id_rol: 0,
        namerol: '',
        description_rol: ''
      }
    }
  }

  editDoctor = new FormGroup({
    startime_doctor: new FormControl('', Validators.required),
    departime_doctor: new FormControl('', Validators.required),
    speciality: new FormControl(0, Validators.required),
    user: new FormControl(0, Validators.required)
  })

  newDoctor = new FormGroup({
    startime_doctor: new FormControl('', Validators.required),
    departime_doctor: new FormControl('', Validators.required),
    speciality: new FormControl(0, Validators.required),
    user: new FormControl(0, Validators.required)
  })

  submit(data: any) {
    if (this.selectedDoctor) {
      data.id_doctor = this.selectedDoctor.id_doctor;
    }
    this.doctorService.update(data).subscribe((result) => {
      if (result) {
        Swal.fire({
          icon: 'success',
          title: 'Actualizado con Exito',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
    console.log(data);
  }

  constructor(private doctorService: DoctorService, private router: Router) { }

  ngOnInit(): void {
    this.doctorService.getAll().subscribe(data => {
      this.doctors = data;
    })
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

  openSeeModal(doctor: DoctorModel) {
    this.selectedDoctor = doctor;
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

  openEditModal(doctorEdit: DoctorModel) {
    this.selectedDoctor = doctorEdit;
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

  deleteDoctor() {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Si, bórralo!",
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado con Exito",
          showConfirmButton: false,
          icon: "success"
        });
      }
    });
  }
}
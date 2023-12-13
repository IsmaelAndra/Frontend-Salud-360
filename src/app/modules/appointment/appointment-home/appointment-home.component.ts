import { Component, OnInit } from '@angular/core';
import { ConsultoryModel } from '../entities/consultory.entity';
import { PacientModel } from '../entities/pacient.entity';
import { DoctorModel } from '../../doctor/entities/doctor.entity';
import { ScheduleModel } from '../entities/schedule.entity';
import { SpecialityModel } from '../entities/speciality.entity';
import { SpecialityService } from '../services/speciality.service';
import { ScheduleService } from '../services/schedule.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppointmentModel } from '../entities/appointment.entity';
import { AppointmentService } from '../services/appointment.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ConsultoryService } from '../services/consultory.service';
import { DoctorService } from '../../doctor/services/doctor.service';
import { UserModel } from '../../user/entities/user.entity';
import { PacientService } from '../services/pacient.service';

@Component({
  selector: 'app-appointment-home',
  templateUrl: './appointment-home.component.html',
  styleUrls: ['./appointment-home.component.css']
})
export class AppointmentHomeComponent implements OnInit {
  consultories: ConsultoryModel[] = [];
  pacients: PacientModel[] = [];
  doctors: DoctorModel[] = [];
  schedules: ScheduleModel[] = [];
  specialities: SpecialityModel[] = [];
  user: UserModel[] = [];

  constructor(private specilityService: SpecialityService, private scheduleService: ScheduleService, private appointmentService: AppointmentService, private consultoryService: ConsultoryService, private router: Router, private doctorService: DoctorService, private pacientService: PacientService) { }

  ngOnInit(): void {
    this.specilityService.getAll().subscribe(data => {
      this.specialities = data;
    })

    this.scheduleService.getAll().subscribe(data => {
      this.schedules = data;
    })

    this.consultoryService.getAll().subscribe(data => {
      this.consultories = data;
    })

    this.doctorService.getAll().subscribe(data => {
      this.doctors = data;
    })

    this.pacientService.getAll().subscribe(data => {
      this.pacients = data;
    })
  }

  appointments: AppointmentModel = {
    id_medical: 0,
    date_medical: new Date(),
    speciality_medical: '',
    status_medical: 'activo',
    reason_medical: '',
    schedule: {
      id_schedule: 0,
      weekday_schedule: '',
      startime_schedule: '',
      departime_schedule: ''
    },
    consultory: {
      id_consultory: 0,
      name_consultory: '',
      phone_consultory: 0,
      address_consultory: ''
    },
    pacient: {
      id_pacient: 0,
      identification_pacient: 0,
      name_pacient: '',
      lastname_pacient: '',
      dateofbirth_pacient: new Date(),
      gender_pacient: '',
      address_pacient: '',
      phone_pacient: 0,
      blood_type_pacient: '',
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
    },
    doctor: {
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
  }

  newAppointment = new FormGroup({
    date_medical: new FormControl(new Date(),[Validators.required, this.datefuturaValidator]),
    speciality_medical: new FormControl('', Validators.required),
    status_medical: new FormControl('activo', Validators.required),
    reason_medical: new FormControl('', Validators.required),
    schedule: new FormControl(0, Validators.required),
    consultory: new FormControl(0, Validators.required),
    pacient: new FormControl(1, Validators.required),
    doctor: new FormControl(0, Validators.required)
  })

  datefuturaValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const fechaSeleccionada = new Date(control.value);
    const fechaHaceUnMes = new Date();
    fechaHaceUnMes.setMonth(fechaHaceUnMes.getMonth() + 1);

    return fechaSeleccionada > new Date() && fechaSeleccionada <= fechaHaceUnMes ? null : { fechaInvalida: true };
  }

  submit(data: any) {
    if (this.appointments) {
      data.id_medical = this.appointments.id_medical;
    }
    this.appointmentService.store(data).subscribe((result) => {
      if (result) {
        Swal.fire({
          icon: 'success',
          title: "Agendado con Exito",
          text: "Si no realiza el pago en los proximos 30 minutos su cita se cancelara",
          showConfirmButton: true,
          confirmButtonText: "Entendido",
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/appointment-pay'])
          }
        });
        console.log(data);
      }
    })
  }
};

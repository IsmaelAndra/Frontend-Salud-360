import { DoctorModel } from "../../doctor/entities/doctor.entity";
import { ConsultoryModel } from "./consultory.entity";
import { PacientModel } from "./pacient.entity";
import { ScheduleModel } from "./schedule.entity";

export interface AppointmentModel {
    id_medical: number | null;
    date_medical: Date;
    speciality_medical: String;
    status_medical: String;
    reason_medical: String;
    schedule: ScheduleModel;
    consultory: ConsultoryModel;
    pacient: PacientModel;
    doctor: DoctorModel;
}

export interface CreateAppointmentDto extends Omit<AppointmentModel, 'id_medical'>{
    id_schedule: number;
    id_consultory: number;
    id_patient: number;
    id_doctor: number;
}

export interface UpdateAppointmentDto extends Partial<AppointmentModel>{
    id_schedule: number;
    id_consultory: number;
    id_patient: number;
    id_doctor: number;
}
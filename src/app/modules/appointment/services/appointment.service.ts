import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointmentModel, CreateAppointmentDto, UpdateAppointmentDto } from '../entities/appointment.entity';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  readonly apiUrl = 'http://localhost:8093/api/medical_appointment/';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<AppointmentModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<AppointmentModel[]>(url);
  }

  getOne(id_medical: AppointmentModel['id_medical']): Observable<AppointmentModel>{
    const url = `${this.apiUrl}/${id_medical}/`;
    return this.httpClient.get<AppointmentModel>(url);
  }

  store(Appointment: CreateAppointmentDto): Observable<AppointmentModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<AppointmentModel>(url, Appointment)
  }

  update(Appointment: UpdateAppointmentDto): Observable<AppointmentModel> {
    const url = `${this.apiUrl}/${Appointment.id_medical}/`;
    return this.httpClient.patch<AppointmentModel>(url, Appointment)
  }

  destroy(id_medical: AppointmentModel['id_medical']): Observable<any> {
    const url = `${this.apiUrl}/${id_medical}/`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}

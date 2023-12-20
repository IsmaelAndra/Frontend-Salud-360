import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppointmentModel, CreateAppointmentDto, UpdateAppointmentDto } from '../entities/appointment.entity';
import { Observable, map } from 'rxjs';
import { TokenService } from '../../auth/services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  readonly apiUrl = 'http://localhost:8093/api/medical_appointment';

  constructor(private readonly httpClient: HttpClient, private tokenService: TokenService) { }

  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenService.getToken()
      }),
    };
  }

  getAll(): Observable<AppointmentModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<AppointmentModel[]>(url, this.httpOptions());
  }

  getOne(id_medical: AppointmentModel['id_medical']): Observable<AppointmentModel>{
    const url = `${this.apiUrl}/${id_medical}`;
    return this.httpClient.get<AppointmentModel>(url, this.httpOptions());
  }

  store(Appointment: CreateAppointmentDto): Observable<AppointmentModel> {
    const url = `${this.apiUrl}/save`;
    return this.httpClient.post<AppointmentModel>(url, Appointment, this.httpOptions())
  }

  update(Appointment: UpdateAppointmentDto): Observable<AppointmentModel> {
    const url = `${this.apiUrl}/${Appointment.id_medical}/`;
    return this.httpClient.patch<AppointmentModel>(url, Appointment, this.httpOptions())
  }

  destroy(id_medical: AppointmentModel['id_medical']): Observable<any> {
    const url = `${this.apiUrl}/${id_medical}/`;
    return this.httpClient.delete<any>(url, this.httpOptions()).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}

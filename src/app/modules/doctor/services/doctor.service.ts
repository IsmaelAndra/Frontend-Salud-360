import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DoctorModel, CreateDoctorDto, UpdateDoctorDto } from '../entities/doctor.entity';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  readonly apiUrl = 'http://localhost:8093/api/doctor/';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<DoctorModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<DoctorModel[]>(url);
  }

  getOne(id_doctor: DoctorModel['id_doctor']): Observable<DoctorModel>{
    const url = `${this.apiUrl}/${id_doctor}/`;
    return this.httpClient.get<DoctorModel>(url);
  }

  store(Doctor: CreateDoctorDto): Observable<DoctorModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<DoctorModel>(url, Doctor)
  }

  update(Doctor: UpdateDoctorDto): Observable<DoctorModel> {
    const url = `${this.apiUrl}/${Doctor.id_doctor}/`;
    return this.httpClient.patch<DoctorModel>(url, Doctor)
  }

  destroy(id_doctor: DoctorModel['id_doctor']): Observable<any> {
    const url = `${this.apiUrl}/${id_doctor}/`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}
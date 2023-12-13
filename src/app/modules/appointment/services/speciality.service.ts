import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { SpecialityModel, CreateSpecialityDto, UpdateSpecialityDto } from '../entities/speciality.entity';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  readonly apiUrl = 'http://localhost:8093/api/speciality/';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<SpecialityModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<SpecialityModel[]>(url);
  }

  getOne(id_speciality: SpecialityModel['id_speciality']): Observable<SpecialityModel>{
    const url = `${this.apiUrl}/${id_speciality}/`;
    return this.httpClient.get<SpecialityModel>(url);
  }

  store(Speciality: CreateSpecialityDto): Observable<SpecialityModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<SpecialityModel>(url, Speciality)
  }

  update(Speciality: UpdateSpecialityDto): Observable<SpecialityModel> {
    const url = `${this.apiUrl}/${Speciality.id_speciality}/`;
    return this.httpClient.patch<SpecialityModel>(url, Speciality)
  }

  destroy(id_speciality: SpecialityModel['id_speciality']): Observable<any> {
    const url = `${this.apiUrl}/${id_speciality}/`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PacientModel, CreatePacientDto, UpdatePacientDto } from '../entities/pacient.entity';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  readonly apiUrl = 'http://localhost:8093/api/pacient/';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<PacientModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<PacientModel[]>(url);
  }

  getOne(id_pacient: PacientModel['id_pacient']): Observable<PacientModel>{
    const url = `${this.apiUrl}/${id_pacient}/`;
    return this.httpClient.get<PacientModel>(url);
  }

  store(Pacient: CreatePacientDto): Observable<PacientModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<PacientModel>(url, Pacient)
  }

  update(Pacient: UpdatePacientDto): Observable<PacientModel> {
    const url = `${this.apiUrl}/${Pacient.id_pacient}/`;
    return this.httpClient.patch<PacientModel>(url, Pacient)
  }

  destroy(id_pacient: PacientModel['id_pacient']): Observable<any> {
    const url = `${this.apiUrl}/${id_pacient}/`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}
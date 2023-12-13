import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ConsultoryModel, CreateConsultoryDto, UpdateConsultoryDto } from '../entities/consultory.entity';

@Injectable({
  providedIn: 'root'
})
export class ConsultoryService {

  readonly apiUrl = 'http://localhost:8093/api/consultory/';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<ConsultoryModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<ConsultoryModel[]>(url);
  }

  getOne(id_consultory: ConsultoryModel['id_consultory']): Observable<ConsultoryModel>{
    const url = `${this.apiUrl}/${id_consultory}/`;
    return this.httpClient.get<ConsultoryModel>(url);
  }

  store(Consultory: CreateConsultoryDto): Observable<ConsultoryModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<ConsultoryModel>(url, Consultory)
  }

  update(Consultory: UpdateConsultoryDto): Observable<ConsultoryModel> {
    const url = `${this.apiUrl}/${Consultory.id_consultory}/`;
    return this.httpClient.patch<ConsultoryModel>(url, Consultory)
  }

  destroy(id_consultory: ConsultoryModel['id_consultory']): Observable<any> {
    const url = `${this.apiUrl}/${id_consultory}/`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}
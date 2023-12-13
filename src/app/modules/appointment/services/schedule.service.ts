import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ScheduleModel, CreateScheduleDto, UpdateScheduleDto } from '../entities/schedule.entity';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  readonly apiUrl = 'http://localhost:8093/api/schedule/';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<ScheduleModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<ScheduleModel[]>(url);
  }

  getOne(id_schedule: ScheduleModel['id_schedule']): Observable<ScheduleModel>{
    const url = `${this.apiUrl}/${id_schedule}/`;
    return this.httpClient.get<ScheduleModel>(url);
  }

  store(Schedule: CreateScheduleDto): Observable<ScheduleModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<ScheduleModel>(url, Schedule)
  }

  update(Schedule: UpdateScheduleDto): Observable<ScheduleModel> {
    const url = `${this.apiUrl}/${Schedule.id_schedule}/`;
    return this.httpClient.patch<ScheduleModel>(url, Schedule)
  }

  destroy(id_schedule: ScheduleModel['id_schedule']): Observable<any> {
    const url = `${this.apiUrl}/${id_schedule}/`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}
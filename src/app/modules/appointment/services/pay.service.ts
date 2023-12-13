import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppointmentModel, CreateAppointmentDto, UpdateAppointmentDto } from '../entities/appointment.entity';
import { Observable, map } from 'rxjs';
import { CreatePayDto, PayModel, UpdatePayDto } from '../entities/pay.entity';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  readonly apiUrl = 'http://localhost:8093/api/pay/';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<PayModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<PayModel[]>(url);
  }

  getOne(id_pay: PayModel['id_pay']): Observable<PayModel>{
    const url = `${this.apiUrl}/${id_pay}/`;
    return this.httpClient.get<PayModel>(url);
  }

  store(Pay: CreatePayDto): Observable<PayModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<PayModel>(url, Pay)
  }

  update(Pay: UpdatePayDto): Observable<PayModel> {
    const url = `${this.apiUrl}/${Pay.id_pay}/`;
    return this.httpClient.patch<PayModel>(url, Pay)
  }

  destroy(id_pay: PayModel['id_pay']): Observable<any> {
    const url = `${this.apiUrl}/${id_pay}/`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}

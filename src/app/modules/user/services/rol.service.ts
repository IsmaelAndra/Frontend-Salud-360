import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { CreateRolDto, RolModel, UpdateRolDto } from '../entities/rol.entity';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  readonly apiUrl = 'http://localhost:8093/api/rol/';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<RolModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<RolModel[]>(url);
  }

  getOne(id_rol: RolModel['id_rol']): Observable<RolModel>{
    const url = `${this.apiUrl}/${id_rol}/`;
    return this.httpClient.get<RolModel>(url);
  }

  store(Rol: CreateRolDto): Observable<RolModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<RolModel>(url, Rol)
  }

  update(Rol: UpdateRolDto): Observable<RolModel> {
    const url = `${this.apiUrl}/${Rol.id_rol}/`;
    return this.httpClient.patch<RolModel>(url, Rol)
  }

  destroy(id_rol: RolModel['id_rol']): Observable<any> {
    const url = `${this.apiUrl}/${id_rol}/`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}
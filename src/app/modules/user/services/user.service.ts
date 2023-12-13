import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { UserModel, CreateUserDto, UpdateUserDto } from '../entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly apiUrl = 'http://localhost:8093/api/user/';

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<UserModel[]> {
    const url = `${this.apiUrl}`;
    return this.httpClient.get<UserModel[]>(url);
  }

  getOne(id_user: UserModel['id_user']): Observable<UserModel>{
    const url = `${this.apiUrl}/${id_user}/`;
    return this.httpClient.get<UserModel>(url);
  }

  store(User: CreateUserDto): Observable<UserModel> {
    const url = `${this.apiUrl}`;
    return this.httpClient.post<UserModel>(url, User)
  }

  update(User: UpdateUserDto): Observable<UserModel> {
    const url = `${this.apiUrl}/${User.id_user}/`;
    return this.httpClient.patch<UserModel>(url, User)
  }

  destroy(id_user: UserModel['id_user']): Observable<any> {
    const url = `${this.apiUrl}/${id_user}/`;
    return this.httpClient.delete<any>(url).pipe(map((response: { rta: boolean; }) => {
        return response.rta;
      })
      );
  }
}
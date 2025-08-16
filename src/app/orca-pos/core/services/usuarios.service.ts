import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private URL_API = 'http://localhost:8080/users/getUsers';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.get<User[]>(`${this.URL_API}`, {headers: headers});
  }

}

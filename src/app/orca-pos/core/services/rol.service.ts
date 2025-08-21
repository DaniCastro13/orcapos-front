import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CatRol} from '../../models/CatRol';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private URL_API = 'http://localhost:8080/roles';

  constructor(private http: HttpClient) { }


  getRoles(): Observable<CatRol[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    })
    return this.http.get<CatRol[]>(`${this.URL_API}/findAllRoles`, {headers: headers});
  }
}

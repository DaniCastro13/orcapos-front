import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL_AUTH = 'http://localhost:8080/api/v1/auth/login';
  private tokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(this.URL_AUTH, {username, password}).pipe(
      tap(resp => {
        if(resp.token) {
          console.log('login', resp.token);
          this.setToken(resp.token);
        }
      })
    );
  }

  private setToken(token: string) {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    if(typeof window !== 'undefined') {
      return localStorage.getItem(this.tokenKey)
    } else {
      return null
    }
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}

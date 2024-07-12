import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Register } from '../components/register/register.component';
import { Reset } from '../components/reset-pin/reset-pin.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
    private jwtHelper: JwtHelperService
  ) { }

  login(credentials: { customerId: string, pin: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Authentication/Login`, credentials)
      .pipe(
        tap(response => {
          if (response.status == true) {
            localStorage.setItem('token', response.entity.accessToken);
            let jsonString = response.entity.body.customerId;
            localStorage.setItem('me', jsonString);
          }
        })
      );
  }

  register(data:Register): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Authentication/Register`, data)
      .pipe(
        tap(response => {
          if (response.status == true) {
            
          }
        })
      );
  }

  resetPin(data:Reset): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}Authentication/ChangePin`, data)
      .pipe(
        tap(response => {
          if (response.status == true) {
            
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('me');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getProfile(): Observable<any> {
    let custId = localStorage.getItem('me');
    return this.http.get<any>(`${this.apiUrl}Authentication/Profile?customerId=`+custId);
  }

  getResetCode(data:any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}Authentication/ResetCode?customerId=`+data);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}

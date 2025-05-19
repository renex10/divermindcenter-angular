import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  // Método para obtener usuarios
  getUsers(page: number = 0, size: number = 10): Observable<any> {
    return this.http
      .get(`${this.apiUrl}?page=${page}&size=${size}`)
      .pipe(tap((resp) => console.log(resp))); // Faltaba cerrar el paréntesis aquí
  }
}
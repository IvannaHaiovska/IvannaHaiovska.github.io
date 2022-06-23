import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  sendEmail(data: any) {
    return this.http.post(baseUrl, data);
  }
}

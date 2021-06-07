import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  input: any;

  url ='http://localhost:8000/loginuser/'
  constructor(private http:HttpClient) { }

  loginUser(input: any): Observable<any> {
    return this.http.post(this.url, input)
  }
}
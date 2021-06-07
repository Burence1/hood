import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  userData: any;
  url = 'https://burence-neighbor.herokuapp.com/api/users/'

  constructor(private http:HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(this.url, userData)
  }
}

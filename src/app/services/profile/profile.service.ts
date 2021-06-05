import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Profile } from './../../interfaces/profile';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url ='http://127.0.0.1:8000/api/profile/'
  constructor(private http:HttpClient) { }

  fetchProfileApi(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url);

  }
}

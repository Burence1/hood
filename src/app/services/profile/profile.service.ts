import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Profile } from './../../interfaces/profile';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url ='http://127.0.0.1:8000/api/profile/'
  update_url ='http://127.0.0.1:8000/api/update/profile/'
  constructor(private http:HttpClient) { }

  fetchProfileApi(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url);

  }
  update(id: any,profile:Profile) {
    return this.http.put(`${this.update_url}${id}/`, profile);
  }
}

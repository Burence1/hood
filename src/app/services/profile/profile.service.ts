import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Profile } from './../../interfaces/profile';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url ='https://burence-neighbor.herokuapp.com/api/profile/'
  update_url ='https://burence-neighbor.herokuapp.com/api/update/profile/'
  constructor(private http:HttpClient) { }

  fetchProfileApi(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.url);

  }
  update(id: any,profile:Profile) {
    return this.http.put(`${this.update_url}${id}/`, profile);
  }

}
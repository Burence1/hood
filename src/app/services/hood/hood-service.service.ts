import { Hood } from '../../interfaces/hood';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HoodServiceService {

  url = 'http://127.0.0.1:8000/api/hood/'
  update_url ='http://127.0.0.1:8000/api/update/hood/'
  single_url ='http://127.0.0.1:8000/api/single-hood/'

  constructor(private http:HttpClient) {

   }

  get(id: any): Observable<Hood> {
    return this.http.get(`${this.single_url}${id}/`);
  }

   fetchHoodApi(): Observable<Hood[]>{
     return this.http.get<Hood[]>(this.url);

   }
  create(hood: any) {
    return this.http.post(this.url, hood);
  }

  update(id: any, hood: Hood) {
    return this.http.put(`${this.update_url}${id}/`, hood);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.update_url}${id}`);
  }
}
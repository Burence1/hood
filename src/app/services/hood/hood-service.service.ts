import { Hood } from '../../interfaces/hood';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HoodServiceService {

  url = 'https://burence-neighbor.herokuapp.com/api/hood/'
  update_url ='https://burence-neighbor.herokuapp.com/api/update/hood/'
  single_url ='https://burence-neighbor.herokuapp.com/api/single-hood/'

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
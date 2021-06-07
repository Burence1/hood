import { Business } from './../../interfaces/business';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  url ='http://127.0.0.1:8000/api/business/'
  update_url ='http://127.0.0.1:8000/api/update/business/'
  single_url ='http://127.0.0.1:8000/api/single-business/'
  constructor(private http:HttpClient) {
    
   }

  get(id: any): Observable<Business> {
    return this.http.get(`${this.single_url}${id}/`);
  }

  fetchBusiness():Observable<Business[]>{
    return this.http.get<Business[]>(this.url);
  }

  create(business:any) {
    return this.http.post(this.url, business);
  }
  update(id: any, business: Business) {
    return this.http.put(`${this.update_url}${id}/`, business);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.update_url}${id}`);
  }
}

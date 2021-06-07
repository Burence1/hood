import { Business } from './../../interfaces/business';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  url ='https://burence-neighbor.herokuapp.com/api/business/'
  update_url ='https://burence-neighbor.herokuapp.com/api/update/business/'
  single_url ='https://burence-neighbor.herokuapp.com/api/single-business/'
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

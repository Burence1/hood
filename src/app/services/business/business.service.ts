import { Business } from './../../interfaces/business';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  url ='http://127.0.0.1:8000/api/business/'

  constructor(private http:HttpClient) { }

  fetchBusiness():Observable<Business[]>{
    return this.http.get<Business[]>(this.url);
  }
}

import { Hood } from './../interfaces/hood';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HoodServiceService {

  url = 'http://127.0.0.1:8000/api/hood/'

  constructor(private http:HttpClient) {

   }
   fetchHoodApi(): Observable<Hood[]>{
     return this.http.get<Hood[]>(this.url);

   }
}

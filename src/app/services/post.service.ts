import { Posts } from './../interfaces/posts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  get(arg0: string): string {
    throw new Error('Method not implemented.');
  }
  url ='http://127.0.0.1:8000/api/post/'
  constructor(private http:HttpClient) {
    
   }
  fetchPostsApi(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.url);

  }
}
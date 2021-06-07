import { Posts } from '../../interfaces/posts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PostService {
  url ='https://burence-neighbor.herokuapp.com/api/post/'
  update_url = 'https://burence-neighbor.herokuapp.com/api/update/post/'
  single_url ='https://burence-neighbor.herokuapp.com/api/single-post/'
  constructor(private http:HttpClient) {
    
   }
  get(id: any): Observable<Posts> {
    return this.http.get(`${this.single_url}${id}/`);
  }

  fetchPostsApi(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.url);

  }
  create(posts: any) {
    return this.http.post(this.url, posts);
  }
  update(id: any, posts: Posts) {
    return this.http.put(`${this.update_url}${id}/`, posts);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.update_url}${id}`);
  }
}
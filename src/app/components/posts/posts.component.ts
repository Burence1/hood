import { Posts } from './../../interfaces/posts';
import { PostService } from '../../services/posts/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:Posts[]=[];
  constructor(private http:HttpClient,private postservice:PostService) { }

  findPosts() {
    this.postservice.fetchPostsApi().subscribe(
      (res) => {
        this.posts = res

      }, error => {
        console.error(error)
      }
    );
    
  }
  onSubmit(posts: any) {
    this.postservice.create(posts).subscribe((result) => {
      console.warn("result", result)
    })
    console.warn(posts)
  }
  updatePosts(id: any, posts: Posts) {
    this.postservice.update(id, posts).subscribe((result) => {
      console.warn("result", result)
    })
    console.warn(id)
  }
  ngOnInit(): void {
  }

}

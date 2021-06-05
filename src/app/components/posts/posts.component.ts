import { Posts } from './../../interfaces/posts';
import { PostService } from './../../services/post.service';
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

  ngOnInit(): void {
  }

}

import { Posts } from './../../interfaces/posts';
import { PostService } from '../../services/posts/post.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postsForm = new FormGroup({
    post_name: new FormControl(''),
    post_content: new FormControl(''),
    profile: new FormControl(''),
    hood: new FormControl(''),
  });

  updateForm = new FormGroup({
    id:new FormControl(''),
    post_name: new FormControl(''),
    post_content: new FormControl(''),
    profile: new FormControl(''),
    hood: new FormControl(''),
  });

  posts:Posts[]=[];
  currentIndex = -1;
  currentPosts?: Posts;
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
    this.findPosts()
  }

  refreshList(): void {
    this.findPosts();
    this.currentPosts = undefined;
    this.currentIndex = -1;
  }
  setActivePosts(posts: Posts, index: number): void {
    this.currentPosts = posts;
    this.currentIndex = index;
  }

}

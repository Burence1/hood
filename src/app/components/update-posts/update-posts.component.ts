import { PostService } from './../../services/posts/post.service';
import { Posts } from './../../interfaces/posts';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-posts',
  templateUrl: './update-posts.component.html',
  styleUrls: ['./update-posts.component.css']
})
export class UpdatePostsComponent implements OnInit {
  currentPosts: Posts = {
    post_name: '',
    post_content: '',
    profile:'',
    hood:'',
  };
  message = '';


  constructor(private postservice: PostService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPost(this.route.snapshot.paramMap.get('id'));
  }

  getPost(id: string | null) {
    this.postservice.get(id)
      .subscribe(
        data => {
          this.currentPosts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status: boolean): void {
    const data = {
      post_name: this.currentPosts.post_name,
      post_content: this.currentPosts.post_content,
      profile:this.currentPosts.profile,
      hood:this.currentPosts.hood,
      published:status,
    };

    this.postservice.update(this.currentPosts.id, data)
      .subscribe(
        response => {
          this.currentPosts.published = status;
          console.log(response);
          // this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updatePost(): void {
    this.postservice.update(this.currentPosts.id, this.currentPosts)
      .subscribe(
        response => {
          console.log(response);
          // this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deletePost(): void {
    this.postservice.delete(this.currentPosts.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/business']);
        },
        error => {
          console.log(error);
        });
  }
}
import { Hood } from './../../interfaces/hood';
import { HoodServiceService } from './../../services/hood/hood-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-hood',
  templateUrl: './update-hood.component.html',
  styleUrls: ['./update-hood.component.css']
})
export class UpdateHoodComponent implements OnInit {
  currentHood: Hood = {
    name: '',
    image:'',
    hood_desc: '',
    location: '',
  };
    message='';

  constructor(private hoodservice: HoodServiceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message='';
    this.getHood(this.route.snapshot.paramMap.get('id'));
  }

  getHood(id: string | null) {
    this.hoodservice.get(id)
      .subscribe(
        data => {
          this.currentHood = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status: boolean): void {
    const data = {
      image:this.currentHood.image,
      name: this.currentHood.name,
      description: this.currentHood.hood_desc,
      location: this.currentHood.location,
    };

    this.hoodservice.update(this.currentHood.id, data)
      .subscribe(
        response => {
          this.currentHood.published = status;
          console.log(response);
          // this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  updateHood(): void {
    this.hoodservice.update(this.currentHood.id, this.currentHood)
      .subscribe(
        response => {
          console.log(response);
          // this.message = response.message;
        },
        error => {
          console.log(error);
        });
  }

  deleteBusiness(): void {
    this.hoodservice.delete(this.currentHood.id)
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
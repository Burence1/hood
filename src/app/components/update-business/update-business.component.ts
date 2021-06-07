import { BusinessService } from './../../services/business/business.service';
import { Business } from './../../interfaces/business';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-business',
  templateUrl: './update-business.component.html',
  styleUrls: ['./update-business.component.css']
})
export class UpdateBusinessComponent implements OnInit {
  currentBusiness: Business = {
    business_name: '',
    business_desc: '',
    business_email: '',
    profile:'',
    neighborhood:'',
    published: false
  };
  message = '';


  constructor(private businessservice: BusinessService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBusiness(this.route.snapshot.paramMap.get('id'));
  }

  getBusiness(id: string | null) {
    this.businessservice.get(id)
      .subscribe(
        data => {
          this.currentBusiness = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status: boolean): void {
    const data = {
      name: this.currentBusiness.business_name,
      description: this.currentBusiness.business_desc,
      email: this.currentBusiness.business_email,
      profile: this.currentBusiness.profile,
      neighborhood: this.currentBusiness.neighborhood,
      published: status
    };

    this.businessservice.update(this.currentBusiness.id, data)
      .subscribe(
        response => {
          this.currentBusiness.published = status;
          console.log(response);
          
        },
        error => {
          console.log(error);
        });
  }

  updateBusiness(): void {
    this.businessservice.update(this.currentBusiness.id, this.currentBusiness)
      .subscribe(
        response => {
          console.log(response);
          
        },
        error => {
          console.log(error);
        });
  }

  deleteBusiness(): void {
    this.businessservice.delete(this.currentBusiness.id)
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

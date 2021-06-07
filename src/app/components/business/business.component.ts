import { BusinessService } from './../../services/business/business.service';
import { Business } from './../../interfaces/business';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businessForm = new FormGroup({
    business_name: new FormControl(''),
    business_desc: new FormControl(''),
    profile: new FormControl(''),
    neighborhood:new FormControl(''),
    business_email: new FormControl(''),
  });

  updateForm = new FormGroup({
    id:new FormControl(''),
    business_name: new FormControl(''),
    business_desc: new FormControl(''),
    profile: new FormControl(''),
    neighborhood: new FormControl(''),
    business_email: new FormControl(''),
  });

  business:Business[]=[];
  currentIndex = -1;
  currentBusiness?: Business;
  constructor(private http:HttpClient,private businessservice:BusinessService) { }

  findBusiness() {
    this.businessservice.fetchBusiness().subscribe(
      (res) => {
        this.business = res

      }, error => {
        console.error(error)
      }
    );
  }
  onSubmit(business:any){
    this.businessservice.create(business).subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(business)
  }
  updateBusiness(id: any, business:Business) {
    this.businessservice.update(id, business).subscribe((result) => {
      console.warn("result", result)
    })
    console.warn(id)
  }
  ngOnInit(): void {
    this.findBusiness();
  }

  refreshList(): void {
    this.findBusiness();
    this.currentBusiness = undefined;
    this.currentIndex = -1;
  }
  setActiveBusiness(business: Business, index: number): void {
    this.currentBusiness = business;
    this.currentIndex = index;
  }
}
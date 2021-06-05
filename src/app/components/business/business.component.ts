import { BusinessService } from './../../services/business/business.service';
import { Business } from './../../interfaces/business';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  business:Business[]=[];
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
  ngOnInit(): void {
  }

}

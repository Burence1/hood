import { Hood } from './../../interfaces/hood';
import { HoodServiceService } from '../../services/hood/hood-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {
  
  hood: Hood[]=[];

  constructor(private hoodservice:HoodServiceService,private http:HttpClient) {
   }

   findHood(){
     this.hoodservice.fetchHoodApi().subscribe(
       (res)=>{
          this.hood=res

     },error=>{
       console.error(error)
     }
     );
   }
  onSubmit(hood: any) {
    this.hoodservice.create(hood).subscribe((result) => {
      console.warn("result", result)
    })
    console.warn(hood)
  }
  updateHood(id: any, hood: Hood) {
    this.hoodservice.update(id, hood).subscribe((result) => {
      console.warn("result", result)
    })
    console.warn(id)
  }

  ngOnInit(): void {
  }

}

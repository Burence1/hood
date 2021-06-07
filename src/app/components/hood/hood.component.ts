import { Hood } from './../../interfaces/hood';
import { HoodServiceService } from '../../services/hood/hood-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { error } from 'selenium-webdriver';


@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {
  hoodForm = new FormGroup({
    name: new FormControl(''),
    hood_desc: new FormControl(''),
    location: new FormControl('')
  });

  updateForm = new FormGroup({
    id:new FormControl(''),
    name: new FormControl(''),
    hood_desc: new FormControl(''),
    location: new FormControl('')
  });
  
  hood: Hood[]=[];
  currentIndex = -1;
  currentHood?: Hood;
  constructor(private hoodservice:HoodServiceService,private http:HttpClient) {
   }

  ngOnInit(): void {
    this.findHood();
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

  refreshList(): void {
    this.findHood();
    this.currentHood = undefined;
    this.currentIndex = -1;
  }
  setActiveHood(hood: Hood, index: number): void {
    this.currentHood = hood;
    this.currentIndex = index;
  }

}

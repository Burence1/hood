import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  url ='http://127.0.0.1:8000/api/business/'

  constructor(private http:HttpClient) { }

  fetchBusinessApi(){
    return this.http.get(this.url)
  }

  ngOnInit(): void {
  }

}

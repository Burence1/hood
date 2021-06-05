import { Profile } from './../../interfaces/profile';
import { ProfileService } from './../../services/profile/profile.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:Profile[]=[];

  constructor(private profileservice:ProfileService) { }

  findProfiles() {
    this.profileservice.fetchProfileApi().subscribe(
      (res) => {
        this.profile = res

      }, error => {
        console.error(error)
      }
    );
  }

  ngOnInit(): void {
  }

}

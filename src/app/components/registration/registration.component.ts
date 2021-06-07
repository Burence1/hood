import { RegisterService } from './../../services/register/register.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  input: any;

  constructor(private registerservice:RegisterService) { }

  ngOnInit(): void {
    this.input = {
      username: '',
      email: '',
      password: '',
    }
  }
  registerUser() {
    this.registerservice.registerUser(this.input).subscribe(
      response => {
        alert(this.input.username + 'has been created')
      },
      error => console.log('error', error)
    );
  }

}

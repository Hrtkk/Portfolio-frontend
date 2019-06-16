import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})


export class SignupComponent implements OnInit {


  credentials: TokenPayload = {
      _id: '',
      userName: '',
      email: '',
      firstName: '',
      lastName: '',
      password: ''
  };
  constructor(
    private httpClient: HttpClient,
    private signupService: AuthenticationService
  ) { }

  ngOnInit() {
  }

    signUp() {
    this.signupService.register(this.credentials).subscribe(data => {
      // this.serverData = data;
      console.log(data);
    }, error => console.log(error));
  }
}

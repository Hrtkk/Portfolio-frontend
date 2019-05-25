import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService, PayLoad } from './login.service';
import { User } from '../models/user';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements OnInit {
  serverData: User;
  clickMessage = '';
  title = 'Hello world';
  credentials: PayLoad = {
      email : '',
      password : ''
  }

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService
  ) { }

  // us: User;
  ngOnInit() {
  }
  logIn() {
    this.loginService.Login(this.credentials).subscribe(data => {
      // this.serverData = data;
      console.log(data);
    }, error => console.log(error));
  }
}

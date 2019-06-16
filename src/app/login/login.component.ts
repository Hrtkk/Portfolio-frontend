import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { PayLoad } from '../services/authentication.service';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements OnInit {
  serverData: JSON;
  clickMessage = '';
  title = 'Hello world';
  credentials: PayLoad = {
    email : '',
    password: '',
  };

  constructor(
    private httpClient: HttpClient,
    private loginService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  onClickMe() {
    this.clickMessage = 'You have clicked here';
    this.httpClient.get('http://127.0.0.1:5000/index').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    }, error => console.log(error));
  }

  onKey(event: any) { // without type info
    this.title += event.target.value + ' | ';
  }

  Login(){
    // console.log(email, password);
    // this.credentials.email = email;
    // this.credentials.password = password;
    console.log(this.credentials);
    this.loginService.login(this.credentials).subscribe(data => {
      console.log(data);
      // console.log(this.serverData);
    }, error => console.log(error));
  }
}

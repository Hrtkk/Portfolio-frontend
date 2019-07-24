import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  loggedin: boolean;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.loggedin = this.authService.isLoggedIn('');
  }
  logout() {
    this.authService.logout();
  }

}

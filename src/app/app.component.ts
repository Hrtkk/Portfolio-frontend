import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  serverData: JSON;
  employeeData: JSON;

  title = 'Portfolio-frontend';
  faCoffee = faCoffee;
  
  constructor(private httpClient: HttpClient) {}

}

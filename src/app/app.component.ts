import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  serverData: JSON;
  employeeData: JSON;

  title = 'Portfolio-frontend';

  constructor(private httpClient: HttpClient) {}

  sayHi() {
    this.httpClient.get('http://127.0.0.1:5000/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    });
  }

  getAllEmoloyee() {
    this.httpClient.get('http://127.0.0.1:5000/').subscribe(data => {
      this.employeeData = data as JSON;
      console.log(this.employeeData);
    });
  }
}

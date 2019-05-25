import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }
  navbtnvalue = 'profile';

  ngOnInit() {
  }

  clickMe(a: string) {
    this.navbtnvalue = a;
  }

}

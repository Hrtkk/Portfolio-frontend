import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }
  navbtnvalue = 'dashboard';

  ngOnInit() {
  }

  clickMe(a: string) {
    this.navbtnvalue = a;
  }

}

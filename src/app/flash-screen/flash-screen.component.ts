import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-screen',
  templateUrl: './flash-screen.component.html',
  styleUrls: ['./flash-screen.component.sass']
})
export class FlashScreenComponent implements OnInit {

  hasAccount = true;
  constructor() { }

  ngOnInit() {
  }
  HasNoAccount(){
    this.hasAccount = false;
    console.log(this.hasAccount);
  }
  HasAccount(){
    this.hasAccount = true;
    console.log(this.hasAccount);

  }

}

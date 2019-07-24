import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.sass']
})
export class MarketComponent implements OnInit {
  constructor(
              private authservice: AuthenticationService
            ) { }


    ngOnInit() {
  }
  
   ClickMe() {     
  }
}

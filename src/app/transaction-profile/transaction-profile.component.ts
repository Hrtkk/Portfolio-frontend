import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-profile',
  templateUrl: './transaction-profile.component.html',
  styleUrls: ['./transaction-profile.component.sass']
})
export class TransactionProfileComponent implements OnInit {

  selectedValue: string;
  selectedCar: string;

  constructor() { }

  ngOnInit() {
    
  }

}

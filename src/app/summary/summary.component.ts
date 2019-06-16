import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {

  close = 1;
  open = 2;
  Volume = 3;
  Frange = 4578.7878;
  drange = 4578.7812;
  Avolume = 4578;

  constructor() { }

  ngOnInit() {
  }

}

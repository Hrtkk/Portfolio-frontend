import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthenticationService } from '../services/authentication.service';

export interface PeriodicElement {
name: string;
position: number;
weight: number;
symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
{position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
{position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
{position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
{position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
{position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
{position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
{position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
{position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.sass']
})
export class MarketComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
    myChart: any;
    data: any = '';
    pieData: [];
    pieLabel: [];
    histX:[];
    histY:[];
  constructor(
              private authservice: AuthenticationService
            ) { }

    public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: [];
    public barChartType = 'bar';
    public barChartLegend = true;
    public barChartData: [{data:[], label: string}];

    ngOnInit() {
      this.authservice.getProfileInfo().subscribe(data => {
        this.histX = data.map(s => s.TransactionDate);
        this.histY = data.map(s => s.NumberOfShares);
        this.barChartLabels = this.histX;
        this.barChartData = [
            {data: this.histY, label: 'Series A'},
        ];
      });
      const canvas: any = document.getElementById('myChart');
      const ctx = canvas.getContext('2d');
      this.myChart = new Chart(ctx, {
          type: 'pie',
          data: {
              labels: this.histX,
              datasets: [{
                  label: '# of Votes',
                  data: this.histY,
                  backgroundColor: [
                      '#111222',
                      '#722712',
                      '#784512',
                      '#acac14',
                      'rgba(153, 102, 255, 0.2)',
                      '#74dc74'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 2
              }]
          },
          options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
      });
  }
  
      //     this.weatherAPI.fetchData().subscribe(data => {
      //     console.log(data['Time Series (Daily)']['2018-12-28']['1. open']);
      //     const openPrice = data['Time Series (Daily)']['2018-12-28']['1. open'];
      //     const highestPrice = data['Time Series (Daily)']['2018-12-28']['2. high'];
      //     const lowPrice = data['Time Series (Daily)']['2018-12-28']['3. low'];
      //     const closePrice = data['Time Series (Daily)']['2018-12-28']['4. close'];
      //     const volume = data['Time Series (Daily)']['2018-12-28']['5. volume'];
      //     console.log(openPrice, highestPrice, lowPrice, closePrice, volume);
      //     // let d = data.map(data => )
      //      });
   ClickMe() {
     
  }
}

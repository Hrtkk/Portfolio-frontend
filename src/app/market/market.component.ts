import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.sass']
})
export class MarketComponent implements OnInit {

    myChart: any;
  constructor(private weatherAPI: WeatherService) { }


    public barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType = 'bar';
    public barChartLegend = true;
    public barChartData = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];
  ngOnInit() {
      const canvas: any = document.getElementById('myChart');
      const ctx = canvas.getContext('2d');
      this.myChart = new Chart(ctx, {
          type: 'pie',
          data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
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
      this.weatherAPI.fetchData().subscribe(data => {
          console.log(data);
      });

  }

}

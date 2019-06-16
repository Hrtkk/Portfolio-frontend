import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
import { StockChart, Chart } from 'angular-highcharts';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
// import { TRANSACTIONS } from '../models/mock-transaction';
import { Transactions } from '../models/data';
import { DATA } from '../models/stock-data2';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit, AfterViewInit {
   stock: StockChart;
   transaction: Transactions[];
   dataStock = DATA;
   chart: any;
    constructor( ) {}

    ngOnInit() {
    //   this.transaction = TRANSACTIONS;
}

    ngAfterViewInit() {
        Highcharts.stockChart('container', {

        chart: {
            alignTicks: false
        },
        rangeSelector: {
            selected: 1
        },
        title: {
            text: 'AAPL Stock Volume'
        },
        series: [{
            type: 'column',
            name: 'AAPL Stock Volume',
            data: [
                [1298851200000,100768479],
                [1298937600000,114032163],
                [1299024000000,150647189],
                [1299110400000,125196764],
                [1299196800000,113316483],
                [1299456000000,136530149],
                [1299542400000,89078955],
                [1299628800000,113349033],
                [1299715200000,126972055],
                [1299801600000,117770016]
            ],
        dataGrouping: {
        units: [[
            // tslint:disable-next-line: indent
            'week', // unit name
                [1] // allowed multiples
            ], [
            'month',
                    [1, 2, 3, 4, 6]
                    ]]
                }
            }]
        });
    }

            // 	this.chart = Highcharts.stockChart('container', {
    // 	yAxis: [{
    // 		labels: {
    // 			align: 'left'
    // 		},
    // 		height: '80%',
    // 		resize: {
    // 			enabled: true
    // 		}
    // 		}, {
    // 		labels: {
    // 			align: 'left'
    // 		},
    // 		top: '80%',
    // 		height: '20%',
    // 		offset: 0
    // 	}],
    // 	tooltip: {
    // 		shape: 'square',
    // 		headerShape: 'callout',
    // 		borderWidth: 0,
    // 		shadow: false,
    // 		positioner: function (width, height, point) {
    // 			var chart = this.chart,
    // 				position;

    // 			if (point.isHeader) {
    // 				position = {
    // 					x: Math.max(
    // 						// Left side limit
    // 						chart.plotLeft,
    // 						Math.min(
    // 							point.plotX + chart.plotLeft - width / 2,
    // 							// Right side limit
    // 							chart.chartWidth - width - chart.marginRight
    // 						)
    // 					),
    // 					y: point.plotY
    // 				};
    // 			} else {
    // 				position = {
    // 					x: point.series.chart.plotLeft,
    // 					y: point.series.yAxis.top - chart.plotTop
    // 				};
    // 			}
    // 			return position;
    // 		}
    // 		},
    // 		series: [{
    // 			type: 'ohlc',
    // 			id: 'aapl-ohlc',
    // 			name: 'AAPL Stock Price',
    // 			data: []
    // 		}, {
    // 			type: 'column',
    // 			id: 'aapl-volume',
    // 			name: 'AAPL Volume',
    // 			data: [],
    // 			yAxis: 1
    // 		}],
    // 		responsive: {
    // 			rules: [{
    // 				condition: {
    // 					maxWidth: 800
    // 				},
    // 				chartOptions: {
    // 					rangeSelector: {
    // 						inputEnabled: false
    // 					}
    // 				}
    // 			}]
    // 		}
    // 	});
    // }
}
        // this.stock = new StockChart({
        //   chart: {
        //     alignTicks: false
        //   },
        //     rangeSelector: {
        //     selected: 1
        //   },
        //   title: {
        //     text: 'AAPL Stock Volume'
        //   },
        //   series: [{
        //     type: 'column',
        //     name: 'AAPL Stock Volume',
        //   data: [
        //     [1298851200000,100768479],
        //     [1298937600000,114032163],
        //     [1299024000000,150647189],
        //     [1299110400000,125196764],
        //     [1299196800000,113316483],
        //     [1299456000000,136530149],
        //     [1299542400000,89078955],
        //     [1299628800000,113349033],
        //     [1299715200000,126972055],
        //     [1299801600000,117770016]
        //   ],
        //   dataGrouping: {
        //     units: [[
        //       'week', // unit name
        //         [1] // allowed multiples
        //         ], [
        //       'month',
        //         [1, 2, 3, 4, 6]
        //         ]]
        //       }
        //     }]
        //   });


    //  this.stock = new StockChart({
    //     rangeSelector: {
    //       selected: 1
    //     },
    //     title: {
    //       text: 'AAPL Stock Price'
    //     },
    //     series: [{
    //       tooltip: {
    //         valueDecimals: 2
    //       },
    //       name: 'AAPL',
    //       data: Data
    //     }]
    //   });







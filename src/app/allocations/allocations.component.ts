import { Component, OnInit } from '@angular/core';
import { Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import {fromEvent} from 'rxjs';
import {pairwise, switchMap, takeUntil} from 'rxjs/operators';
import * as Highcharts from 'highcharts';
import { chart } from 'highcharts';
import { AuthenticationService } from '../services/authentication.service';
// import { Highcharts.SeriesColumnOptions } from 'highcharts'
export interface SERIES {
    name: string;
    type: 'line';
    data: number[];
}


@Component({
  selector: 'app-allocations',
  templateUrl: './allocations.component.html',
  styleUrls: ['./allocations.component.sass']
})
export class AllocationsComponent implements OnInit, AfterViewInit {

    // a reference to the canvas element from our template
    // @ViewChild('canvas') public canvas: ElementRef;
    @Input() public width = 400;
    @Input() public height = 400;

    // lineChart: Highcharts.ChartObject;
    ob1: Highcharts.Chart;
    ob2: Highcharts.Chart;
    ob3: Highcharts.Chart;
    ob4: Highcharts.Chart;

    // private cx: CanvasRenderingContext2D;
    numStock: number;
    Data: SERIES[];
    data: SERIES;
    displayedColumns = ['item', 'value'];
    netReturn: number;
    sharp_portfolio: any;
    min_var_portfolio: any;

    sharp_portfolio1: any;
    min_var_portfolio1: any;
    return_series: any;
    series_index: any;
    pieSeries: any;
    constructor(
        private authService: AuthenticationService,
    ) { }

    ngOnInit() {
        this.numStock = 0;
        this.Data = []
        this.authService.getReturns().subscribe(data => {
            console.log(data);
            this.netReturn = data['netReturn']
            this.return_series = data['stock_return']
            this.series_index = data['index']
            this.pieSeries = data['pieSeries']

            let p = []
            
            // for( let i in this.)


            // tslint:disable-next-line: forin
            for (let i in this.pieSeries) {
                p.push({name: this.pieSeries[i]['symbol'], y: this.pieSeries[i]['share']});
            }

            this.ob2.addSeries({type: 'pie', name: 'share', data: p});
            // tslint:disable-next-line: forin
            for (let i in this.return_series) {
                let p = this.return_series[i];
                this.ob1.addSeries({type: 'line', colorByPoint: true, name: i, data: p});
            }
        });
    }

    ngAfterViewInit() {
        const lineOptions: Highcharts.Options = {
            title: {
                text: 'Your price of Shares, 2007-2017'
            },
            subtitle: {
                text: 'Source: Zettamine.com'
            },
            xAxis: {
                categories: this.series_index
            },
            yAxis: {
                title: {
                    text: 'returns'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2007
                }
            },
            series: this.Data,

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        }
        const pieOptions: Highcharts.Options = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Your Investments'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        style: {
                            color: 'black'
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: 'Brands',
                colorByPoint: true,
                data: null
            }]
        }

        this.ob1 = Highcharts.chart('return-container', lineOptions);
        this.ob2 = Highcharts.chart('investment-container', pieOptions);
        this.ob3 = Highcharts.chart('min-var-Pie', pieOptions);
        this.ob4 = Highcharts.chart('sharpe-Pie', pieOptions);

    }

    formatLabel(value: number | null) {
        if (!value) {
          return 0;
        }
        if (value >= 100) {
          return Math.round(value / 100) + 'k';
        }
        return value;
    }

    submit() {
        console.log(this.numStock)
        this.authService.getSuggestion(this.numStock).subscribe(data => {
            console.log(data);
            this.min_var_portfolio = [];
            this.sharp_portfolio = [];
            console.log(this.min_var_portfolio);

            this.min_var_portfolio1 = [];
            this.sharp_portfolio1 = [];

            for (var key in data['minVaPoTicker']) {
                if (data['minVaPoTicker'].hasOwnProperty(key)) {
                    this.min_var_portfolio1.push({'item': key, 'val': data['minVaPoTicker'][key]});
                }
            }

            for (var key in data['SharpPoTicker']) {
                if (data['SharpPoTicker'].hasOwnProperty(key)) {
                    this.sharp_portfolio1.push({'item': key, 'val': data['SharpPoTicker'][key]});
                }
            }

            for (var key in data['minVaPo']) {
                if (data['minVaPo'].hasOwnProperty(key)) {
                    this.min_var_portfolio.push({name: key, y: data['minVaPo'][key]});
                }
            }

            for (var key in data['SharpPo']) {
                if (data['SharpPo'].hasOwnProperty(key)) {
                    this.sharp_portfolio.push({name: key, y: data['SharpPo'][key]});
                }
            }
            this.ob3.addSeries({type: 'pie', name: 'share', data: this.min_var_portfolio});
            this.ob4.addSeries({type: 'pie', name: 'share', data: this.sharp_portfolio});

        });

    }
}

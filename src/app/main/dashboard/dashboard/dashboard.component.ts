import {Component, OnInit, ViewChild} from '@angular/core';
import {fuseAnimations} from '../../../../@fuse/animations';
import { ChartComponent } from 'ng-apexcharts';
import {
    ApexNonAxisChartSeries,
    ApexResponsive,
    ApexChart
} from 'ng-apexcharts';

export interface ChartOptions {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
}
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: fuseAnimations

})
export class DashboardComponent implements OnInit {

    boards = [
        {title: 'HOME OFFICE', icon: 'home', details: 4000, color: 'rgb(60, 66, 82)'},
        {title: 'OFFICE PREMISES', icon: 'location_city', details: 16, color: 'rgb(60, 66, 82)'},
        {title: 'ABROAD OFFICE', icon: 'local_airport', details: 10, color: 'rgb(60, 66, 82)'},
        {title: 'TRAVELLED ABROAD IN PAST 14 DAYS', icon: 'local_airport', details: 3, color: '#f44336'},
        {title: 'DRY COUGH, SNEEZING., SORE THROAT AND WEAKNESS', icon: 'local_hotel', details: 800, color: '#f44336'},
        {title: 'EMERGENCY HELP NEEDED', icon: 'local_hospital', details: 2, color: '#f44336'},
    ];
    panels = [
        { name: 'Close contact with colleagues/ suppliers from any other countries expect Bangladesh in Last 14 days' , number: 4},
        { name: 'Close contact with relatives and Friends from any other countries expect Bangladesh in past 14 days' , number: 2},
        { name: 'Recently travel to any area with known local spread of COVID-19' , number: 18},
        { name: 'Housemates recently travel to any area with known local spread of COVID-19' , number: 15}
    ];

    @ViewChild('chart') chart: ChartComponent;

    public chartOptions: Partial<ChartOptions>;

    constructor() {
        this.chartOptions = {
            series: [750, 50, 50, 50, 50, 50],
            chart: {
                width: 380,
                type: 'pie'
            },
            labels: ['Healthy', 'Dry Cough', 'Sneezing', 'Sore Throat', 'Weakness', 'Breathing Difficulty'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 400,

                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ]
        };
    }



    ngOnInit(): void {

    }

}

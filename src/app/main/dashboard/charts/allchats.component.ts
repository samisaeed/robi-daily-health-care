import {Component, OnInit, ViewChild} from '@angular/core';
import {
    ChartComponent,
    ApexAxisChartSeries,
    ApexChart,
    ApexXAxis,
    ApexDataLabels,
    ApexStroke,
    ApexMarkers,
    ApexYAxis,
    ApexGrid,
    ApexTitleSubtitle,
    ApexLegend
} from 'ng-apexcharts';

export interface ChartOptions {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    stroke: ApexStroke;
    dataLabels: ApexDataLabels;
    markers: ApexMarkers;
    tooltip: any; // ApexTooltip;
    yaxis: ApexYAxis;
    grid: ApexGrid;
    legend: ApexLegend;
    title: ApexTitleSubtitle;
}
@Component({
  selector: 'app-allchats',
  templateUrl: './allchats.component.html',
  styleUrls: ['./allchats.component.scss']
})
export class AllchatsComponent implements OnInit {
    @ViewChild('chart') chart: ChartComponent;
    public chartOptions: Partial<ChartOptions>;
  constructor() {
      this.chartOptions = {
          series: [
              {
                  name: 'Dry Cough',
                  data: [5, 5, 3, 2, 3, 6, 1, 10, 6, 8, 15, 10]
              },
              {
                  name: 'Sneezing',
                  data: [5, 4, 6, 4, 3, 8, 9, 7, 6, 5, 2, 5]
              },
              {
                  name: 'Sore Throat',
                  data: [7, 7, 7, 9, 5, 8, 2, 7, 2, 6, 5, 7]
              },
              {
                  name: 'Weakness',
                  data: [1, 2, 35, 5, 10, 8, 5, 7, 5, 6, 4, 7]
              },
              {
                  name: 'Breathing Difficult',
                  data: [1, 2, 35, 5, 10, 8, 5, 7, 5, 6, 4, 7]
              },
              {
                  name: 'Need Emergency',
                  data: [1, 2, 3, 5, 3, 8, 5, 7, 5, 6, 4, 7]
              }
          ],
          chart: {
              height: 500,
              width: 1200,
              type: 'line'
          },
          dataLabels: {
              enabled: false
          },
          stroke: {
              width: 5,
              curve: 'straight',
              dashArray: [0, 8, 5]
          },
          title: {
              text: 'Suspects Symptoms And Emergency Graph',
              align: 'left'
          },
          legend: {
              tooltipHoverFormatter: (val, opts) => {
                  return (
                      val +
                      ' - <strong>' +
                      opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
                      '</strong>'
                  );
              }
          },
          markers: {
              size: 0,
              hover: {
                  sizeOffset: 6
              }
          },
          xaxis: {
              labels: {
                  trim: false
              },
              categories: [
                  '18 April',
                  '19 April',
                  '20 April',
                  '21 April',
                  '22 April',
                  '23 April',
                  '24 April',
                  '25 April',
                  '26 April',
                  '27 April',
                  '28 April',
                  '29 April'
              ]
          },
          tooltip: {
              y: [
                  {
                      title: {
                          formatter: (val) => {
                              return val + ' (per person)';
                          }
                      }
                  },
                  {
                      title: {
                          formatter: (val) => {
                              return val + ' (per person)';
                          }
                      }
                  },
                  {
                      title: {
                          formatter: (val) => {
                              return val + ' (per person)';
                          }
                      }
                  }
                  ,
                  {
                      title: {
                          formatter: (val) => {
                              return val + ' (per person)';
                          }
                      }
                  },
                  {
                      title: {
                          formatter: (val) => {
                              return val + ' (per person)';
                          }
                      }
                  },
                  {
                      title: {
                          formatter: (val) => {
                              return val + ' (per person)';
                          }
                      }
                  }
              ]
          },
          grid: {
              borderColor: '#f1f1f1'
          }
      };
  }

  ngOnInit(): void {
  }

}

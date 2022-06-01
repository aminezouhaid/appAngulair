import { Component, OnInit,ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";



export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  
  public data: any;

  constructor() {this.data = [
    { Value: 25, Label: "Residential" },
    { Value: 12, Label: "Heating" },
    { Value: 11, Label: "Lighting" },
    { Value: 18, Label: "Other" },
    { Value: 37, Label: "Cooling" }
];}




  
  ngOnInit(): void {
  }


  


}


import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import {NumberByNiveauService } from './number-by-niveau.service';
//import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart2',
  templateUrl: './bar-chart2.component.html',
  styleUrls: ['./bar-chart2.component.scss']
})
export class BarChart2Component implements OnInit {
  public dataNumberByNiveau:any
  constructor(private NumberByNiveauService:NumberByNiveauService) { }

  ngOnInit() {
   this.NumberByNiveauService.getNumberByNiveau().subscribe(
      data =>{
        console.log(data)
       this.dataNumberByNiveau=data      
      var chart = new CanvasJS.Chart("chartContainer4", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title: {
        text: "Nombre des Inscriptions Par Niveau d'Etude"
      },
      axisY: {
        includeZero: false
      },
      axisX: {
        title: "Niveau d'Etude"
      },
      data: [{
        type: "column",
        dataPoints:this.dataNumberByNiveau
      }]
    });
    chart.render();
  }
  );
  
  
  }
}

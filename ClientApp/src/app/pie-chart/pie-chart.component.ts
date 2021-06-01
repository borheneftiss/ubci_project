import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import {InscriEtablissementService } from './inscri-etablissement.service';
import {EtabInscri} from './_model/EtabInscri';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  public dataEtablisInscri:any;
  public dataEtablisInscri2:any;
  public result:any; 
  constructor(private InscriEtablissementService: InscriEtablissementService) { }

  ngOnInit() {
   this.InscriEtablissementService.getListEtablissementParInscrit().subscribe(
      data => {
       console.log(data)
       this.dataEtablisInscri=data
       console.log(this.dataEtablisInscri)
        console.log(data[0])
        this.dataEtablisInscri2=data[0]
        var chart = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        theme: "light2", 
        title: {
          text: "Nombre des Inscriptions par Etablissement"
        },
        data: [{
          type: "pie",
          startAngle: 240,
          indexLabel: "{label} {y}",
          dataPoints: this.dataEtablisInscri
        }]
      });
      chart.render();    
      }
   );

  }
}

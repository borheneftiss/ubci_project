import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import {InscriEtablissementService } from './inscri-etablissement.service';
import {EtabInscri} from './_model/EtabInscri';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public dataEtablisInscri:any; 
  constructor(private InscriEtablissementService: InscriEtablissementService) {
    this.getListEtablissementParInscrit()
  }

  ngOnInit() {
    this.InscriEtablissementService.getListEtablissementParInscrit().subscribe(
      data => {
       console.log(data)
       this.dataEtablisInscri=data
       console.log(this.dataEtablisInscri)
      }
   );
   console.log("testtttttttttttttttt",this.dataEtablisInscri)
    var chart = new CanvasJS.Chart("chartContainer3", {
      animationEnabled: true,
      title: {
        text: "Nombre des Inscription Par Etablissement"
      },
      axisX: {
        interval: 1
      },
      axisY: {
        title: "Nombre d'inscriptions",
        scaleBreaks: {
          type: "wavy",
          customBreaks: [{
            startValue: 80,
            endValue: 210
            },
            {
              startValue: 230,
              endValue: 600
            }
        ]}
      },
      data: [{
        type: "bar",
        toolTipContent: " <b>{label}</b><br>Budget: ${y}",
        dataPoints: [
          { label: "ESPRIT", y: 106  },
          { label: "IHEC", y: 59 },
          { label: "ECOLE POLYTECHNIQUE ", y: 4},
          { label: "ECOLE SUPERIEURE DE COMMERCE DE MANOUBA", y: 25},
          { label: "Etablissement_5", y: 36.8},
          { label: "Etablissement_6", y: 41.1},
          { label: "Etablissement_7", y: 46.1 },
          { label: "Etablissement_8", y: 48.3},
          { label: "Etablissement_9", y: 55.9 },
          { label: "Etablissement_10", y: 69.2},
          { label: "Etablissement_11", y: 215.7},
          { label: "Etablissement_12", y: 611.2 }
        ]
        
        
      }]
    });
    chart.render();

    
  }

  getListEtablissementParInscrit() {
    this.InscriEtablissementService.getListEtablissementParInscrit().subscribe(
       data => {
        console.log(data)
        this.dataEtablisInscri=data
        console.log(this.dataEtablisInscri)
       }
    );
}

}

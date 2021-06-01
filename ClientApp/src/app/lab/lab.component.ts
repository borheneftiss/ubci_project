import { Component, OnInit } from '@angular/core';
import {  ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})

@Pipe({ name: 'safe' })

export class LabComponent implements OnInit {
  name: string = 'My first AGM project';
  lat: number = 36.844976 ;
  lng: number = 10.282229;
  url:any
  title = 'app';

  constructor(private sanitizer: DomSanitizer) { 
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/');
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    
  }

}

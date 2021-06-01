import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '800px',
          height: '500px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide,
          imageAutoPlay: true,
          arrowPrevIcon : 'fa fa-arrow-circle-left',
          arrowNextIcon: 'fa fa-arrow-circle-right',
          closeIcon: 'fa fa-times-circle',
         
          previewCloseOnClick: true,
          previewCloseOnEsc: true
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
         
      // max-width 400
      {
          breakpoint: 400,
          preview: true,
          

      }
  ];

  this.galleryImages = [
      {
          small: 'assets/img/ATELIERS INNOVACT/1.JPG',
          medium: 'assets/img/ATELIERS INNOVACT/1.JPG',
          big: 'assets/img/ATELIERS INNOVACT/1.JPG'
      },
      {
          small: 'assets/img/ATELIERS INNOVACT/2.JPG',
          medium: 'assets/img/ATELIERS INNOVACT/2.JPG',
          big: 'assets/img/ATELIERS INNOVACT/2.JPG'
      },
      {
          small: 'assets/img/ATELIERS INNOVACT/3.JPG',
          medium: 'assets/img/ATELIERS INNOVACT/3.JPG',
          big: 'assets/img/ATELIERS INNOVACT/3.JPG'
      },
      {
        small: 'assets/img/ATELIERS INNOVACT/4.JPG',
        medium: 'assets/img/ATELIERS INNOVACT/4.JPG',
        big: 'assets/img/ATELIERS INNOVACT/4.JPG'
    },
    {
      small: 'assets/img/ATELIERS INNOVACT/5.JPG',
      medium: 'assets/img/ATELIERS INNOVACT/5.JPG',
      big: 'assets/img/ATELIERS INNOVACT/5.JPG'
  },
  {
    small: 'assets/img/ATELIERS INNOVACT/6.JPG',
    medium: 'assets/img/ATELIERS INNOVACT/6.JPG',
    big: 'assets/img/ATELIERS INNOVACT/6.JPG'
},
{
  small: 'assets/img/ATELIERS INNOVACT/7.JPG',
  medium: 'assets/img/ATELIERS INNOVACT/7.JPG',
  big: 'assets/img/ATELIERS INNOVACT/7.JPG'
},
{
  small: 'assets/img/ATELIERS INNOVACT/8.JPG',
  medium: 'assets/img/ATELIERS INNOVACT/8.JPG',
  big: 'assets/img/ATELIERS INNOVACT/8.JPG'
},
{
  small: 'assets/img/ATELIERS INNOVACT/9.JPG',
  medium: 'assets/img/ATELIERS INNOVACT/9.JPG',
  big: 'assets/img/ATELIERS INNOVACT/9.JPG'
},
{
  small: 'assets/img/ATELIERS INNOVACT/10.JPG',
  medium: 'assets/img/ATELIERS INNOVACT/10.JPG',
  big: 'assets/img/ATELIERS INNOVACT/10.JPG'
},
{
  small: 'assets/img/ATELIERS INNOVACT/11.JPG',
  medium: 'assets/img/ATELIERS INNOVACT/11.JPG',
  big: 'assets/img/ATELIERS INNOVACT/11.JPG'
},
{
  small: 'assets/img/ATELIERS INNOVACT/12.JPG',
  medium: 'assets/img/ATELIERS INNOVACT/12.JPG',
  big: 'assets/img/ATELIERS INNOVACT/12.JPG'
},
{
  small: 'assets/img/ATELIERS INNOVACT/13.JPG',
  medium: 'assets/img/ATELIERS INNOVACT/13.JPG',
  big: 'assets/img/ATELIERS INNOVACT/13.JPG'
},
{
  small: 'assets/img/ATELIERS INNOVACT/14.JPG',
  medium: 'assets/img/ATELIERS INNOVACT/14.JPG',
  big: 'assets/img/ATELIERS INNOVACT/14.JPG'
},
{
  small: 'assets/img/ATELIERS INNOVACT/15.JPG',
  medium: 'assets/img/ATELIERS INNOVACT/15.JPG',
  big: 'assets/img/ATELIERS INNOVACT/15.JPG'
}







  ];
}

}

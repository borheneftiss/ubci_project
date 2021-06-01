import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
export interface DialogDataEdit {
  path: string ;

  title: 'Angular For Beginners';
}

@Component({
  selector: 'app-popupvideo',
  templateUrl: './popupvideo.component.html',
  styleUrls: ['./popupvideo.component.scss']
})

export class PopupvideoComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;
  videoSource: string;
  constructor(@Inject(LOCAL_STORAGE) private localStorage: any,
  private dialog: MatDialog, private router: Router, @Inject(MAT_DIALOG_DATA) public data: DialogDataEdit) { }

  ngOnInit() {
    this.videoSource = 'https://innovact-ubci.tn/Content/images/Cours/' + this.data.path;
  }
  toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}
}

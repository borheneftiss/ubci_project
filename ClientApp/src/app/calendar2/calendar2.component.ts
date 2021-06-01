// import { Component, OnInit } from '@angular/core';
// import { ViewChild} from '@angular/core';
// import {CalendarComponent} from "ap-angular2-fullcalendar";
// import * as $ from 'jquery';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EventSesrvice } from './event.service';
import {CalendarService } from './services/calendar.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calendar2',
  templateUrl: './calendar2.component.html',
  styleUrls: ['./calendar2.component.scss']
})
export class Calendar2Component implements OnInit {

  calendarOptions: Options;
 displayEvent: any;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(protected eventService: EventSesrvice,private CalendarService: CalendarService) {  }

  ngOnInit() {
    this.CalendarService.getAllAction().subscribe( 
            
      data1=>{

        this.calendarOptions = {
         editable: false,
          eventLimit: false,
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
          },
          buttonText: {
            today: 'Aujourd\'hui',
            month: 'Mois',
            week: 'Semaine',
            day: 'Jour',
            list: 'Liste'
          },
          allDayText: 'Toute la journée',
          monthNames: ['Jan.', 'Fév.', 'Mar.', 'Avril', 'Mai.', 'Juin.', 'Juil.', 'Aoû.', 'Sep.', 'Oct.', 'Nov.', 'Déc.'],
          monthNamesShort: ['Jan.', 'Fév.', 'Mar.', 'Avril', 'Mai.', 'Juin.', 'Juil.', 'Aoû.', 'Sep.', 'Oct.', 'Nov.', 'Déc.'],
          dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
          dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
          timeFormat: 'h(:mm)t',
         
        
        eventMouseout: function(calEvent, jsEvent) {
            $(this).css('z-index', 8);
            $('.tooltipevent').remove();
        },
          events: data1,
          
        };
      }

   );
    
    this.eventService.getEvents().subscribe(data => {
      console.log("test:"+ data);
    
    });


  }


  

  clickButton(model: any) {
    this.displayEvent = model;
  }

  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
    Swal("Intitulé de l'événement",model.event.title);
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
}

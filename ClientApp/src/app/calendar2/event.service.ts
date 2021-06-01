import { Inject, Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {CalendarService } from './services/calendar.service';


@Injectable()
export class EventSesrvice {
    public actions:any
    constructor(private CalendarService: CalendarService) {
       // this.getAllAction()
    }

 
    public getEvents(): any {
        const dateObj = new Date();
        const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
        let data: any;
         return data;

    }
    
};



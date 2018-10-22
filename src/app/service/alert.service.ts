import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;
  constructor(private router: Router) {
    router.events.subscribe(event =>{
      
    })
  }
}

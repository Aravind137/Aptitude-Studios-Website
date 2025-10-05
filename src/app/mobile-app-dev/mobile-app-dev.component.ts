import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Component({
  selector: 'app-mobile-app-dev',
  templateUrl: './mobile-app-dev.component.html',
  styleUrls: ['./mobile-app-dev.component.scss']
})
export class MobileAppDevComponent implements OnInit {

  constructor(private analytics: Analytics) { 
  }
  
  ngOnInit(): void {
    logEvent(this.analytics, 'Mobile_App_Dev_Page')
  }

}

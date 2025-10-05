import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(private analytics: Analytics) {
  }
  
  ngOnInit(): void {
    logEvent(this.analytics, 'Service_Page');
  }

}

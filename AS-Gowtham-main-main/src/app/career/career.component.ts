import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor(private analytics: Analytics) { 
  }
  
  ngOnInit(): void {
    logEvent(this.analytics, 'Career_Page');
  }

}

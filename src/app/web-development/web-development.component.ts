import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})
export class WebDevelopmentComponent implements OnInit {

  constructor(private analytics: Analytics) {
  }
  
  ngOnInit(): void {
    logEvent(this.analytics, 'Web_Development')
  }

}

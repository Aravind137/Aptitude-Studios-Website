import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private analytics: Analytics) {
  }
  
  ngOnInit(): void {
    logEvent(this.analytics, 'AboutUs_Page')
  }

}

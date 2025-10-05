import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private analytics: Analytics) {
  }
  
  ngOnInit(): void {
    logEvent(this.analytics, 'Not_Found_Page')
  }

}

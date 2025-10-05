import { Component, OnInit } from '@angular/core';
import { logEvent, Analytics } from '@angular/fire/analytics';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private analytics: Analytics) {
  }
  ngOnInit(): void {
    logEvent(this.analytics, 'Home_Page');
  }
}

import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Component({
  selector: 'app-gamedev',
  templateUrl: './gamedev.component.html',
  styleUrls: ['./gamedev.component.scss'],
})
export class GamedevComponent implements OnInit {
  constructor(private analytics: Analytics) {
  }
  ngOnInit(): void {
    logEvent(this.analytics, 'GameDev_Page');
  }
}

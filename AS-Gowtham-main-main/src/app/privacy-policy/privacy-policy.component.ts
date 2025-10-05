import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private analytics: Analytics) {
  }
  
  ngOnInit(): void {
    logEvent(this.analytics, 'Privacy_Policy_Page')
  }

}

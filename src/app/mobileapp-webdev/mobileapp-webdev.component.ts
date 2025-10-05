import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobileapp-webdev',
  templateUrl: './mobileapp-webdev.component.html',
  styleUrls: ['./mobileapp-webdev.component.scss']
})
export class MobileappWebdevComponent implements OnInit {

  constructor(private analytics: Analytics, private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    logEvent(this.analytics, 'Mobile_App_Web_Dev_Page');
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.scrollToElement(id);
      }
    });
  }
  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
  }
}

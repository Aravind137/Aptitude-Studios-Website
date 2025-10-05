import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-metaverse-metahumans',
  templateUrl: './metaverse-metahumans.component.html',
  styleUrls: ['./metaverse-metahumans.component.scss']
})
export class MetaverseMetahumansComponent implements OnInit {

  constructor(private analytics: Analytics, private route: ActivatedRoute) { 
  }
  
  ngOnInit(): void {
    logEvent(this.analytics, 'Metaverse_Metahumans_Page');
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

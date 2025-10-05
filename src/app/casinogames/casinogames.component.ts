import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-casinogames',
  templateUrl: './casinogames.component.html',
  styleUrls: ['./casinogames.component.scss'],
})
export class CasinogamesComponent implements OnInit {
  constructor(private router:Router, private analytics: Analytics, private route: ActivatedRoute) {
  }
  
  
  ngOnInit(): void {
    logEvent(this.analytics, 'Casino_Games_Page')
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.scrollToElement(id);
      }
    });
  }
  navigateToDetailsPage(id: number) {
    this.router.navigate(['/casino-details'], {queryParams: {id: id}})
  }
  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
  }
}

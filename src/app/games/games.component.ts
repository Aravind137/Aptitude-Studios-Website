import { Component, OnInit } from '@angular/core';
import { Analytics, logEvent } from '@angular/fire/analytics';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  // @ViewChild('image', {static: true}) image!: ElementRef<HTMLImageElement>;
  constructor(private analytics: Analytics, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    logEvent(this.analytics, 'Games_Page');
    // this.ScrollAnimation();
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.scrollToElement(id);
      }
    });
  }
  // ScrollAnimation() {
  //   gsap.to(this.image.nativeElement, {
  //     scrollTrigger: {
  //       trigger: this.image.nativeElement,
  //       start: "top center",
  //       end: '+=500'
  //     },
  //     x: -100,
  //     stagger: 0.2,
  //   })
  // }
  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
  }
}

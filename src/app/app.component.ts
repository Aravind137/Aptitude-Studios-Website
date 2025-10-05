import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Aptitude Studios';
  @ViewChild('menu', {static: true}) menu!: ElementRef <HTMLDivElement>;

  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngOnInit() {
    this.initialAnimations();
  }

  initialAnimations(): void {
    gsap.from(this.menu.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5,
    });
  }
}

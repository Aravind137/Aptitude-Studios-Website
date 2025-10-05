import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nft-development',
  templateUrl: './nft-development.component.html',
  styleUrls: ['./nft-development.component.scss']
})
export class NftDevelopmentComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit(): void {
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
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

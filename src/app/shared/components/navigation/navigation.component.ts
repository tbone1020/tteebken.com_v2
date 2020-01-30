import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  
  private distancesFromTop: Object = {
    aboutOffset: 601,
    portfolioOffset: 976,
    certificatesOffset: 1317
  };
  
  constructor() {}
  
  ngOnInit() { }
  
  determineWhereToScrollTo(section: string): void {
    window.scrollTo({ 
      top: this.distancesFromTop[section], 
      behavior: 'smooth' 
    });
  }

}

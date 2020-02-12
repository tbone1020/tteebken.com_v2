import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {

  private distancesFromTop: Object = {
    aboutOffset: null,
    portfolioOffset: null,
    contactOffset: null
  };
  
  constructor() {}
  
  ngAfterViewInit() {
    
  }
  
  public determineWhereToScrollTo(section: string): void {
    let htmlSection = document.getElementById(section).offsetTop;
    this.distancesFromTop[section] = htmlSection;
    window.scrollTo({ 
      top: this.distancesFromTop[section], 
      behavior: 'smooth' 
    });
  }

}

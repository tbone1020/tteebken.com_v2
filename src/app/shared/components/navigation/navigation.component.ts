import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { AboutComponent } from '../../../components/about/about.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  
  private distancesFromTop: Object = {
    aboutOffset: 601,
    portfolioOffset: 976,
    certificatesOffset: 1317
  };
  
  constructor(private AboutComponent: ElementRef) {}
  
  ngAfterViewInit() {
    // TODO: add ngAfterViewInit to home component which should fire when all componts load, this includes the components
    // you need the offsetTop
  }
  
  determineWhereToScrollTo(section: string): void {
    window.scrollTo({ 
      top: this.distancesFromTop[section], 
      behavior: 'smooth' 
    });
  }

}

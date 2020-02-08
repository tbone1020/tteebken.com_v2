import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { AboutComponent } from '../../../components/about/about.component';
import { PortfolioComponent } from '../../../components/portfolio/portfolio.component';
import { ContactComponent } from '../../../components/contact/contact.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {
  private contactTopDistance: number;
  private distancesFromTop: Object = {
    aboutOffset: 601,
    portfolioOffset: 976,
    contactOffset: 1317
  };
  
  constructor() {}
  
  ngAfterViewInit() {
    
  }
  
  determineWhereToScrollTo(section: string): void {
    window.scrollTo({ 
      top: this.distancesFromTop[section], 
      behavior: 'smooth' 
    });
  }

}

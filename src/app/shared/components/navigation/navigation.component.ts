import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { AboutComponent } from '../../../components/about/about.component'; 
import { CertificatesComponent } from '../../../components/certificates/certificates.component'; 
import { PortfolioComponent } from '../../../components/portfolio/portfolio.component'; 

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() about: AboutComponent;
  @Input() certificates: CertificatesComponent;
  @Input() portfolio: PortfolioComponent;

  constructor() {}

  ngOnInit() {
  }

  determineWhereToScrollTo(): void {
    console.log(this.about);
    console.log(this.certificates);
    console.log(this.portfolio);
    // window.scrollTo({ 
    //   left: 0, 
    //   top: 0, 
    //   behavior: 'smooth' 
    // });
  }

  scrollToSection(): void {

  }
}

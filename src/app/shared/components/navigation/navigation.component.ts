import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit {

  constructor() {}
  
  ngAfterViewInit() {
    
  }
  
  public scrollToSection(section: string): void {
    let sectionsDistanceFromTop = this.determineWhereToScrollTo(section);
    window.scrollTo({ 
      top: sectionsDistanceFromTop, 
      behavior: 'smooth' 
    });
  }

  private determineWhereToScrollTo(section: string) {
    return document.getElementById(section).offsetTop;

  }

}

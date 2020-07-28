import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IPortfolioLinks } from '../../../shared/interfaces/iportfolio-links';
@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {'class': 'portfolio__project'}
})

export class PortfolioItemComponent {

  @Input() name: string;
  @Input() imagePath: string;
  @Input() links: IPortfolioLinks;
  @Input() technologies: string[];
  

  constructor() { 
    
  }

}

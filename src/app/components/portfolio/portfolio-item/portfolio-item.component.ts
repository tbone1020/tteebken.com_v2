import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {'class': 'portfolio__project'}
})
export class PortfolioItemComponent implements OnInit {

  @Input() name: string;
  @Input() imagePath: string;
  @Input() description: string;
  @Input() links: Object;
  @Input() technologies: string[];
  

  constructor() { }

  ngOnInit() { }

}

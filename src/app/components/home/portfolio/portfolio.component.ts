import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  private listOfPortfolioItems: Object[];

  constructor(private portfolioItems: PortfolioService) { }

  ngOnInit() {
    this.getPortfolioProjects();
  }

  getPortfolioProjects(): void {
    this.listOfPortfolioItems = this.portfolioItems.getProjects();
    console.log(this.listOfPortfolioItems);
  }

}

import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { PortfolioItem } from '../../../shared/models/portfolio-item.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  private listOfPortfolioItems: PortfolioItem[];

  constructor(private portfolioItems: PortfolioService) { }

  ngOnInit() {
    this.getPortfolioProjects();
  }

  async getPortfolioProjects(): Promise<void> {
    this.listOfPortfolioItems = await this.portfolioItems.getProjects();
    console.log(this.listOfPortfolioItems);
  }

}

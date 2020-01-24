import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../services/portfolio.service';
import { PortfolioItem } from '../../../shared/models/portfolio-item.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  private listOfPortfolioItems: PortfolioItem[] = [];
  private isLoading: boolean = true;

  constructor(private portfolioItems: PortfolioService) { }

  ngOnInit() {
    let list = new PortfolioItem("name", "imagePath", "description", "liveDemo", "github", ["tachnologies:"]);
    setTimeout(() => {
      this.listOfPortfolioItems.push(list);
      this.isLoading = false;
    }, 3000)
    this.getPortfolioProjects();
  }

  async getPortfolioProjects(): Promise<void> {
    // this.listOfPortfolioItems = await this.portfolioItems.getProjects();
    
  }

}

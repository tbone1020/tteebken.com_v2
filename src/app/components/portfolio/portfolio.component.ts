import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { PortfolioItem } from '../../shared/models/portfolio-item.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public listOfPortfolioItems: PortfolioItem[] = [];
  public isLoading: boolean = true;

  constructor(private portfolio: PortfolioService) { }

  ngOnInit() {
    this.getPortfolioProjects();
  }

  async getPortfolioProjects(): Promise<void> {
    this.listOfPortfolioItems = await this.portfolio.getProjects();
    this.isLoading = false;
  }

}

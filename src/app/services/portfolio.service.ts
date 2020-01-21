import { Injectable } from '@angular/core';
import { APortfolio } from './aportfolio';
import { HttpClient } from '@angular/common/http';
import { IPortfolio } from './interfaces/iportfolio';
import { PortfolioItem } from '../shared/models/portfolio-item.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService implements APortfolio {
  public BASE_URL: string = "http://localhost:4200/assets/mock-portfolio-items.json";

  constructor(private http: HttpClient) { }

  public async getProjects(): Promise<PortfolioItem[]> {
    try {
      const response = await this.http.get<IPortfolio[]>(this.BASE_URL).toPromise();
      return response.map(item => new PortfolioItem(item.name, item.image_path, item.description, item.links.live_demo, item.links.github, item.technologies));
    } catch(error) {
      console.log("Error calling portfolio items.", error);
      return [];
    }
  }
}

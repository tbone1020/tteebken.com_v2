import { Injectable } from '@angular/core';
import { APortfolio } from './aportfolio';
import { HttpClient } from '@angular/common/http';
import { IPortfolio } from '../shared/interfaces/iportfolio';
import { PortfolioItem } from '../shared/models/portfolio-item.model';

@Injectable({
  providedIn: 'root'
})
export class MockPortfolioService implements APortfolio {
  public BASE_URL: string = "../assets/mock-portfolio-items.json";

  constructor(private http: HttpClient) { }

  public async getProjects(): Promise<any> {
    try {
      // const response = await this.http.get<IPortfolio>(this.BASE_URL).toPromise();
      // return response.map(item => new PortfolioItem(item.name, item.image_path, item.description, item.live_demo, item.github, item.technologies));
    } catch {
      console.log("Error calling portfolio items.");
    }
  }
}

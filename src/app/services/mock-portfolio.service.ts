import { Injectable } from '@angular/core';
import { APortfolio } from './aportfolio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MockPortfolioService implements APortfolio {
  public BASE_URL: string = "../assets/mock-portfolio-items.json";

  constructor(private http: HttpClient) { }

  getPortfolioProjects(): Object[] {
    console.log("Calling")
    const response = this.http.get(this.BASE_URL);
    console.log(response);
    return [{}, {}];
  }
}

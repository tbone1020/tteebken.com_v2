import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {

  private privateShowHeaderStyle: string = null;
  private privateShowSubHeaderStyle: string = null;

  constructor() { }

  ngAfterViewInit() {
    this.privateShowHeaderStyle = "hero__header--show";
    this.privateShowSubHeaderStyle = "hero__sub-header--show";
    console.log("Done loading");
  }

}

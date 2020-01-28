import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @ViewChild('aboutElement', {static: false}) aboutElement: HTMLElement;

  constructor() { }

  ngOnInit() {
  }

}

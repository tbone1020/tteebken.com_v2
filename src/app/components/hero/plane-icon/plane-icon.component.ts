import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plane-icon',
  templateUrl: './plane-icon.component.html',
  styleUrls: ['./plane-icon.component.scss'],
  host: {'class': 'plane'}
})
export class PlaneIconComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

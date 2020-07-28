import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  public certificateList: Object[] = [];

  constructor() { }

  ngOnInit() {
  }

}

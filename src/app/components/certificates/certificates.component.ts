import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  public certificateList: Object[] = [{
      name: " Front end Development",
      url: "#",
      image_path: "https://via.placeholder.com/250",
      image_alt: "image of certificate",
      description: "Certificate in responsive web design from FreeCodeCamp.org",
    }, {
      name: " Front end Development",
      url: "#",
      image_path: "https://via.placeholder.com/250",
      image_alt: "image of certificate",
      description: "Certificate in responsive web design from FreeCodeCamp.org",
    }, {
      name: " Front end Development",
      url: "#",
      image_path: "https://via.placeholder.com/250",
      image_alt: "image of certificate",
      description: "Certificate in responsive web design from FreeCodeCamp.org",
    }, {
      name: " Front end Development",
      url: "#",
      image_path: "https://via.placeholder.com/250",
      image_alt: "image of certificate",
      description: "Certificate in responsive web design from FreeCodeCamp.org",
    }];

  constructor() { }

  ngOnInit() {
  }

}

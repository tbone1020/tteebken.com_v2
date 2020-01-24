import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  private certificateList: Object[] = [{
    url: "#",
    image_path: "https://via.placeholder.com/250",
    image_alt: "image of certificate",
    description: "Certificate in responsive web design from FreeCodeCamp.org",
  }, {
    url: "#",
    image_path: "https://via.placeholder.com/250",
    image_alt: "image of certificate",
    description: "Certificate in responsive web design from FreeCodeCamp.org",
  }, {
    url: "#",
    image_path: "https://via.placeholder.com/250",
    image_alt: "image of certificate",
    description: "Certificate in responsive web design from FreeCodeCamp.org",
  }, {
    url: "#",
    image_path: "https://via.placeholder.com/250",
    image_alt: "image of certificate",
    description: "Certificate in responsive web design from FreeCodeCamp.org",
  }];

  constructor() { }

  ngOnInit() {
  }

}

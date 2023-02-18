import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  images = [
    { src: '/assets/homepage/State=Stats-aptipro.svg' },
    { src: '/assets/homepage/State=Blogs-Aptipro.svg' },
    { src: '/assets/homepage/State=SQLpro.svg' }
  ];

  currentImageIndex = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 2000);
  }

}

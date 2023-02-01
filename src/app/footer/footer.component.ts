import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  imageUrl = 'initial_image_path';

  setImage(imageNumber: number){
    if(imageNumber===1){
      this.imageUrl = '/assets/3d-render-hand-holding-money-sack-with-dollars.jpg';
    }else if(imageNumber===2){
      this.imageUrl = '/assets/Event1.png';
    }else if(imageNumber===3){
      this.imageUrl = '/assets/Event2.jpg';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

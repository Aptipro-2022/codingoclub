import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  

  public isLeftMenuOpen = false;
  public isRightMenuOpen = false;
  navbarOpen = false;

  public toggleLeftOffcanvas() {
    this.isLeftMenuOpen = !this.isLeftMenuOpen;
  }
  public toggleRightOffcanvas() {
    this.isRightMenuOpen = !this.isRightMenuOpen;
  }
  
  
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

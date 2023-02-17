import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateY(0)'
      })),
      state('out', style({
        transform: 'translateY(-100%)'
      })),
      transition('in => out', animate('0.1s ease-out')),
      transition('out => in', animate('0.3s ease-in'))
    ])
  ]
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

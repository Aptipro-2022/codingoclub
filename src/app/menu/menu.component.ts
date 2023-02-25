import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

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
      transition('in => out', animate('0.3s ease-out')),
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
  public closeLeftOffCanvas(): void{
    this.isLeftMenuOpen = false;
  }
  public closeRightOffCanvas(): void{
    this.isRightMenuOpen = false;
  }
  
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private router: Router) { }

  get headerClass(): string {
    // get current route
    const currentRoute = this.router.url;

    // check if current route is home page
    if (currentRoute === '/') {
      return 'header-white';
    } else {
      return 'header-grey';
    }
  }

  ngOnInit(): void {
  }
  

}

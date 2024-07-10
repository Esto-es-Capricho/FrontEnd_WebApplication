import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-navegation-bar',
  templateUrl: './side-navegation-bar.component.html',
  styleUrls: ['./side-navegation-bar.component.css']
})
export class SideNavegationBarComponent {

  @ViewChild('drawerExpanded') drawerExpanded!: MatSidenav;
  isHandset: boolean = true;

  options = [
    { title: 'Home', path: '/consumer/home', icon: 'home' },
    { title: 'Profile', path: '/consumer/profile', icon: 'people' },

  ]

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.isHandset = result.matches;
      if (result.matches) {
        this.drawerExpanded.close();
      } else {
        this.drawerExpanded.open();
      }
    });
  }
}

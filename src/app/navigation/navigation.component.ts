import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  mobileWidth: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.responsivWindow();
  }

  responsivWindow() {
    if (window.innerWidth < 550 ) {
      console.log(window.innerWidth);
      this.mobileWidth = true;
      console.log(this.mobileWidth);
    }
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  mobileWidth: boolean;

  constructor(private service: GlobalService ) {


    this.mobileWidth = service.mobileWidth;
    console.log(this.mobileWidth);
  }


  ngOnInit(): void {

  }
  // responsivWindow() {
  //   if (window.innerWidth < 550) {
  //     console.log(window.innerWidth);
  //     this.mobileWidth = true;
  //     console.log(this.mobileWidth);
  //   }
  // }
}

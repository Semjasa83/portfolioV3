import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //mobileWidth: boolean = false;

  constructor(private service: GlobalService) { }

  ngOnInit(): void {
   // this.responsivWindow();
  }

  // responsivWindow() {
  //   if (window.innerWidth < 550) {
  //     console.log(window.innerWidth);
  //     this.mobileWidth = true;
  //     console.log(this.mobileWidth);
  //   }
  // }
}
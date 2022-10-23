import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  mobileWidth: boolean = false;

  constructor() { 
    this.mobileWidth = false
  }

  responsivWindow() {
    if (window.innerWidth < 550 ) {
      console.log(window.innerWidth);
      this.mobileWidth = true;
      console.log(this.mobileWidth);
    }
  }
}

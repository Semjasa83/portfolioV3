import { Component, OnInit, ViewChild } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public service: GlobalService ) {

  }


  ngOnInit(): void {
    this.service.responsivWindow();
  }
}

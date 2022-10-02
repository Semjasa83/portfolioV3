import { Component, OnInit } from '@angular/core';
import { WorksService } from '../works.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  infos: any;
  skills: any;

  constructor(private service: WorksService) {
    this.infos = service.aboutInfos;
    this.skills = service.skills;
  }

  ngOnInit(): void {
  }

}

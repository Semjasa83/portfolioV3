import { Component, OnInit } from '@angular/core';
import { WorksService } from '../works.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  myWorks: any;

  constructor(private service: WorksService) {
      this.myWorks = service.worksOfMe;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { WorksService } from '../works.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: any;

  constructor(private service: WorksService) {
    this.skills = service.skills;
   }

  ngOnInit(): void {
  }

}

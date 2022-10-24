import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  worksOfMe = [
    {
      "id": 1,
      "name": "Portfolio",
      "img": "assets/img/portfolio.jpg",
      "gitURL": "https://github.com/Semjasa83/portfolioV3.git",
      "webURL": "#",
      "description": "for the portfolio shown here, I don't want to withhold the code :)",
      "tech": "HTML/SCSS, Angular, Typescript",
      "status": "inactiv"
    },
    {
      "id": 2,
      "name": "Pokedex",
      "img": "assets/img/pokedex.jpg",
      "gitURL": "https://github.com/Semjasa83/pokedex_2.git",
      "webURL": "#",
      "description": "In this project, the focus was on receiving data from an API in several levels and rendering them.",
      "tech": "HTML/SCSS, JavaScript",
      "status": "activ"
    },
    {
      "id": 3,
      "name": "Ring of Fire",
      "img": "assets/img/frame-ring.jpg",
      "gitURL": "https://github.com/Semjasa83/ringoffire",
      "webURL": "#",
      "description": "Multiplayer browser game Implementation of the card game Ring of Fire.",
      "tech": "HTML/SCSS, Angular, Typescript, Google Firebase",
      "status": "activ"
    },
/*
    {
      "id": 4,
      "name": "Join-Kanban-Board",
      "img": "./assets/img/#",
      "gitURL": "https://github.com/Semjasa83/join_2.git",
      "webURL": "#",
      "description": "This KANBAN board was about teamwork, UX design implementation and practical relevance.",
      "tech": "Angular, Materials, AOS, Django (by N.R.)",
      "status": "activ"
    },
*/
    {
      "id": 5,
      "name": "El Pollo Loco",
      "img": "assets/img/elpollo-frame.jpg",
      "gitURL": "https://github.com/Semjasa83/el_pollo",
      "webURL": "#",
      "description": "Small jump `n run browser game using OOP in JavaScript.",
      "tech": "HTML/CSS, JavaScript",
      "status": "activ"
    },

  ]

  aboutInfos = [
    {
      "id": 1,
      "counter": "27+",
      "description": "Projects",
      "description_2": "/> Completed"
    },
    {
      "id": 2,
      "counter": "3+",
      "description": "Group Projects",
      "description_2": "/> Completed"
    },
    {
      "id": 3,
      "counter": "1+",
      "description": "Years of",
      "description_2": "/> Experience"
    },
    {
      "id": 4,
      "counter": "28+",
      "description": "Years of",
      "description_2": "/> Windows Experience"
    }
  ]

  skills = [
    {
      "id": 1,
      "name": "HTML5",
      "img": "assets/img/html5.png",
      "icon": "assets/img/icons/html.svg"
    },
    {
      "id": 2,
      "name": "CSS3",
      "img": "assets/img/css.png",
      "icon": "assets/img/icons/css.svg"
    },
    {
      "id": 3,
      "name": "SCSS/SASS",
      "img": "assets/img/sass.png",
      "icon": "assets/img/icons/sass.svg"
    },
    {
      "id": 4,
      "name": "JavaScript",
      "img": "assets/img/javascript.png",
      "icon": "assets/img/icons/js.svg"
    },
    {
      "id": 5,
      "name": "Angular",
      "img": "assets/img/angular.png",
      "icon": "assets/img/icons/angular.svg"
    },
    {
      "id": 6,
      "name": "Git",
      "img": "assets/img/github-fill.png",
      "icon": "assets/img/icons/git.svg"
    },
    {
      "id": 7,
      "name": "Scrum",
      "img": "assets/img/scrum.png",
      "icon": "assets/img/icons/scrum.png"
    },
    {
      "id": 8,
      "name": "RestAPI",
      "img": "assets/img/restapi.png",
      "icon": "assets/img/icons/api.png"
    },
    {
      "id": 9,
      "name": "Database",
      "img": "assets/img/database.svg",
      "icon": "assets/img/icons/db.png"
    }
  ]

  timeline_student = [
    {
      "id": 1,
      "year": "September 1999 - July 2001",
      "type": "STUDENT",
      "destination": "Technical School for Electronics",
      "description": "preparation for vocational Training at Electronics",
      "icon": "fas fa-graduation-cap"
    },
    {
      "id": 2,
      "year": "September 2005 - July 2008",
      "type": "STUDENT",
      "destination": "Technical College - BOS",
      "description": "technical Qualification for University entrance",
      "icon": "fas fa-graduation-cap"
    },
    {
      "id": 3,
      "year": "September 2015 - April 2017",
      "type": "STUDENT",
      "destination": "Master School for Electrics - IHK Schwaben",
      "description": "Bachelor Professional in Electrical Technology and Management (CCI)",
      "icon": "fas fa-graduation-cap"
    }
  ]

  timeline_experience = [
    {
      "id": 1,
      "year": "September 2001 - February 2004",
      "position": "APPRENTICE",
      "destination": "Erhardt + Leimer Elektroanlagen",
      "description": "Technician Electronics for Buildings and Maintenance Technology",
      "icon": "fas fa-bolt"
    },
    {
      "id": 2,
      "year": "July 2008 - Present",
      "position": "ELECTRICIAN",
      "destination": "KUKA Deutschland / Robotics",
      "description": "Repair and conversion of Controls for used Machines and Material Schedule",
      "icon": "fas fa-bolt"
    },
    {
      "id": 3,
      "year": "February 2022 - Present",
      "position": "STUDENT",
      "destination": "Developer Akademie",
      "description": "Frontend Web Developer",
      "icon": "fas fa-code"
    }
  ]

  constructor() { }
}

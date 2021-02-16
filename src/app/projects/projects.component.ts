import { Component, OnInit } from '@angular/core';
import { MYPROJECTS } from '../myprojects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = MYPROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}

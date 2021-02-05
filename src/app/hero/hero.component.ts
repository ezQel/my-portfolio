import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  paragraph = 'I am a software developer. Coding is my passion. I dream of writing code that will impact thousands of people positively someday. Check out some projects I\'ve built.';

  constructor() { }

  ngOnInit(): void {
  }

}

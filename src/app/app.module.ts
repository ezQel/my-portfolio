import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrFormsModule, CrFormsComponent } from 'cr-forms';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HeroComponent } from './hero/hero.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactMeComponent,
    HeroComponent,
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

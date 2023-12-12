import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { Routes } from '@angular/router';
import { QualificationsPageComponent } from './qualifications-page/qualifications-page.component';

import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectModalComponent } from './projects-page/project-modal/project-modal.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    QualificationsPageComponent,
    SkillsPageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    ProjectModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

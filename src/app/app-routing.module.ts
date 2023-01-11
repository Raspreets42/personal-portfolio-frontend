import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { QualificationsPageComponent } from './qualifications-page/qualifications-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';

const routes: Routes = [
  { path: '' , component: HomePageComponent },
  { path: 'about' , component: AboutPageComponent },
  { path: 'qualifications' , component: QualificationsPageComponent },
  { path: 'skills' , component: SkillsPageComponent },
  { path: 'projects' , component: ProjectsPageComponent },
  { path: 'contact' , component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

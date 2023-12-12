import { Component } from '@angular/core';
import {ApiService} from "../services/apiService";

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent {
  panelOpenState = true;
  programmingLanguage: any;
  technologiesOrFrameworks: any;
  tools: any;

  constructor( private apiService: ApiService){
  }

  ngAfterViewInit(){
    this.getSkillsDetails();
  }

  async getSkillsDetails(){
    const skillsDetail = await this.apiService.getSkillsInformation().toPromise();
    this.programmingLanguage = skillsDetail.details[0].programmingLanguage;
    this.technologiesOrFrameworks = skillsDetail.details[0].technologiesOrFrameworks;
    this.tools = skillsDetail.details[0].tools;
  }

}

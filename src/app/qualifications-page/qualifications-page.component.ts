import { Component } from '@angular/core';
import {ApiService} from "../services/apiService";

@Component({
  selector: 'app-qualifications-page',
  templateUrl: './qualifications-page.component.html',
  styleUrls: ['./qualifications-page.component.css']
})
export class QualificationsPageComponent {
  constructor( private apiService: ApiService){
  }

  educationalDetails: any;
  workDetails: any;
  ngAfterViewInit(){
    this.getQualificationDetails();
  }

  async getQualificationDetails(){
    const educationDetails = await this.apiService.getEducationInformation().toPromise();
    this.educationalDetails = educationDetails.details.reverse();
    this.educationalDetails.map( (e: any) => {
      const timePeriod = e.timePeriod.split('to');
      e['startDate'] = timePeriod[0];
      e['endDate'] = timePeriod[1];
    });
    const workDetails = await this.apiService.getWorkInformation().toPromise();
    this.workDetails = workDetails.details;
    this.workDetails.map( (e: any) => {
      const timePeriod = e.timePeriod.split('to');
      e['startDate'] = timePeriod[0];
      e['endDate'] = timePeriod[1];
      e['skillset'] = e.skills.join(`  |  `);
    });
  }
}

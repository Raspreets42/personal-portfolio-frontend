import { Component } from '@angular/core';
import {ApiService} from "../services/apiService";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
  myLogo = '../../assets/images/mylogo.png';

  constructor( private apiService: ApiService){
  }

  personalInfo: any;
  aboutPageDescription: any;
  resumeLink: any;
  emailHref: any
  telHref: any

  ngOnInit(){
    this.getPersonalInformationFunc();
    this.getAboutInformationFunc();
  }

  async getPersonalInformationFunc(){
    const personalInfo = await this.apiService.getPersonalInformation().toPromise();
    this.personalInfo = personalInfo.details[0];
    this.emailHref = 'mailto:'+this.personalInfo.email;
    this.telHref = 'tel:'+this.personalInfo.mobile;
  }
  async getAboutInformationFunc(){
    const aboutInfo = await this.apiService.getAboutInformation().toPromise();
    this.resumeLink = aboutInfo.details[0].resumeDriveLink;
    this.aboutPageDescription = aboutInfo.details[0].aboutScreenDescription.split('</p>');
  }
}

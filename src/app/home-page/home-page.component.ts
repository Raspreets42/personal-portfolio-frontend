import { Component } from '@angular/core';
import { ApiService } from '../services/apiService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  myLogo = '../../assets/images/mylogo.png';

  constructor( private apiService: ApiService){
  }

  personalInfo: any;
  homePageDescription: any;

  ngOnInit(){
    this.getPersonalInformationFunc();
    this.getAboutInformationFunc();
  }

  async getPersonalInformationFunc(){
    const personalInfo = await this.apiService.getPersonalInformation().toPromise();
    this.personalInfo = personalInfo.details[0];
  }
  async getAboutInformationFunc(){
    const aboutInfo = await this.apiService.getAboutInformation().toPromise();
    this.homePageDescription = aboutInfo.details[0].homeScreenDescription.split('</p>');
  }
}

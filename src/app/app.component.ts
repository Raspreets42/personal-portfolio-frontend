import { Component } from '@angular/core';
import {ApiService} from "./services/apiService";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkedin = '../assets/images/linkedin.svg';
  github = '../assets/images/github.svg';

  constructor(private apiService: ApiService, private route: ActivatedRoute){}

  curRoute: any;
  personalInfo: any;
  emailHref: any;
  telHref: any;

  ngOnInit(){
    this.getPersonalInformationFunc();
    this.curRoute = this.route.snapshot.url.map(segment => segment.path).join('/');;
    console.log(this.curRoute)
  }

  async getPersonalInformationFunc(){
    const personalInfo = await this.apiService.getPersonalInformation().toPromise();
    this.personalInfo = personalInfo.details[0];
    this.emailHref = 'mailto:'+this.personalInfo.email;
    this.telHref = 'tel:'+this.personalInfo.mobile;
  }
}

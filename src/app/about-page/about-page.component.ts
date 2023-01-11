import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent {
  myLogo = '../../assets/images/mylogo.png';
  myResume = '../../assets/images/Raspreet_Singh_Pasrija_Resume.pdf'
  downloadResume = '../../assets/images/downloadResume.png'
}

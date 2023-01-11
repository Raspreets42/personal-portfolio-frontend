import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {

  accountingImg = '../../assets/images/accounting1.jpg';
  weatherImg = '../../assets/images/weather.jpg';
  cafeImg = '../../assets/images/cafe1.jpg';

  accountingDetails(): void {
    Swal.fire(
      '<h4 style="font-size: 1.4vmax;">Accounting Application</h4> <p style="font-size: 1vmax;"> This is used to help businesses to keep track on their customers , suppliers , stocks , payment and balancesheets. </p><a style="font-size: 1.2vmax;" href="https://github.com/Raspreets42/Accounting" target="_blank" rel="noopener noreferrer">Link</a>'
    )
  }
  weatherDetails(): void {
    Swal.fire(
      '<h4 style="font-size: 1.4vmax;">Weather Application</h4> <p style="font-size: 1vmax;"> This is used to help user to know the temperature with location , date , min-max temperature and weather status. </p><a style="font-size: 1.2vmax;" href="https://github.com/Raspreets42/ExpressWeatherApp" target="_blank" rel="noopener noreferrer">Link</a>'
    )
  }
  cafeDetails(): void {
    Swal.fire(
      '<h4 style="font-size: 1.4vmax;">Singh\'s Cafe Application</h4> <p style="font-size: 1vmax;"> It Contains an home page with the services it provides and a menu section with all it\'s dishes with details. </p><a style="font-size: 1.2vmax;" href="https://github.com/Raspreets42/SinghCafe" target="_blank" rel="noopener noreferrer">Link</a>'
    )
  }
}

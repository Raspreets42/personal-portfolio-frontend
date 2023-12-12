import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';
import {Router, Routes} from '@angular/router';
import {ApiService} from "../services/apiService";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  constructor(private http: HttpClient, private fb: FormBuilder, private route: Router, private apiService: ApiService) {
  }

  feedbackForm = this.fb.group({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  async sendFeedback() {
    if (this.feedbackForm.value.firstName === '' || this.feedbackForm.value.lastName === '' || this.feedbackForm.value.email === '' || this.feedbackForm.value.subject === '' || this.feedbackForm.value.message === '') {
      Swal.fire({
        icon: 'error',
        title: 'Missing !',
        text: 'Please fill up all the fields',
        timer: 4000
      });
    } else {
      const feedbackResp = await this.apiService.postFeedback(this.feedbackForm.value).toPromise();
      if (feedbackResp.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Thanks ' + feedbackResp.details.firstName,
          text: 'Feedback Submitted Successfully...',
          timer: 4000
        }).then((res: any) => {
          if (res) {
            this.route.navigate(['/'])
          }
        });
      }
      // console.log(responseData);
    }
  }

}

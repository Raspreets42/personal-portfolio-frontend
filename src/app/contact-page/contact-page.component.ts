import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  constructor(private http: HttpClient , private fb: FormBuilder , private route: Router){}

  feedbackForm = this.fb.group({
    FirstName: '',
    LastName: '',
    subject: '',
    message: ''
  });

  sendFeedback(): any{    
    if (this.feedbackForm.value.FirstName === '' || this.feedbackForm.value.LastName === '' || this.feedbackForm.value.subject === '' || this.feedbackForm.value.message === '') {
      Swal.fire({
        icon: 'error',
        title: 'Missing !',
        text: 'Please fill up all the fields',
        timer: 4000
      });
    }else{
      this.http.post('https://feedbackapi.onrender.com/api/submitFeedback', this.feedbackForm.value).subscribe( (responseData: any) => {
        if(responseData){
          Swal.fire({
            icon: 'success',
            title: 'Thanks ' + responseData.FirstName,
            text: 'Feedback Submitted Successfully...',
            timer: 4000
          }).then( (res: any) => {
            if (res) {
              this.route.navigate(['/'])
            }
          });
        }
      // console.log(responseData);
    });
    }
  }

}

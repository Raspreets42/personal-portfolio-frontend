import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService { // Replace with your API endpoint

  constructor(private http: HttpClient) {
  }

  getPersonalInformation(): any{
    return this.http.get(`https://node-api-services.onrender.com` + '/api/getPersonalInformation');
  }

  getAboutInformation(): any{
    return this.http.get(`https://node-api-services.onrender.com` + '/api/getAboutInformation');
  }

  getEducationInformation(): any{
    return this.http.get(`https://node-api-services.onrender.com` + '/api/getEducationInformation');
  }

  getWorkInformation(): any{
    return this.http.get(`https://node-api-services.onrender.com` + '/api/getWorkInformation');
  }

  getSkillsInformation(): any{
    return this.http.get(`https://node-api-services.onrender.com` + '/api/getSkillsInformation');
  }

  getProjectInformation(): any{
    return this.http.get(`https://node-api-services.onrender.com` + '/api/getProjectInformation');
  }

  postFeedback(obj: any): any{
    return this.http.post(`https://node-api-services.onrender.com` + `/api/submitContact`,obj);
  }
}

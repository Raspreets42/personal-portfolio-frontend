import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService { // Replace with your API endpoint

  constructor(private http: HttpClient) {
  }

  getPersonalInformation(): any{
    return this.http.get('http://localhost:3000/api/getPersonalInformation');
  }

  getAboutInformation(): any{
    return this.http.get('http://localhost:3000/api/getAboutInformation');
  }

  getEducationInformation(): any{
    return this.http.get('http://localhost:3000/api/getEducationInformation');
  }

  getWorkInformation(): any{
    return this.http.get('http://localhost:3000/api/getWorkInformation');
  }

  getSkillsInformation(): any{
    return this.http.get('http://localhost:3000/api/getSkillsInformation');
  }

  getProjectInformation(): any{
    return this.http.get('http://localhost:3000/api/getProjectInformation');
  }

  postFeedback(obj: any): any{
    return this.http.post(`http://localhost:3000/api/submitContact`,obj);
  }
}

import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {ApiService} from "../services/apiService";
import {MatDialog} from "@angular/material/dialog";
import {ProjectModalComponent} from "./project-modal/project-modal.component";

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {

  projectDetails: any;

  constructor( private apiService: ApiService, public dialog: MatDialog){
  }

  ngAfterViewInit(){
    this.getProjectDetails();
  }

  async getProjectDetails(){
    const projectDetails = await this.apiService.getProjectInformation().toPromise();
    this.projectDetails = projectDetails.details;
  }

  moreDetails(project: any){
    const dialogRef = this.dialog.open(ProjectModalComponent, {
      data: {project: project},
    });
  }
}

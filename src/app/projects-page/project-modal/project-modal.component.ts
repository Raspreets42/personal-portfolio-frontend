import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { project: any },
  ) {  }

  selectedProject: any;
  projectResponsibility: any;

  ngAfterViewInit(){
    console.log(this.data.project)
    this.selectedProject = this.data.project;
    console.log(this.selectedProject)
    this.projectResponsibility = this.selectedProject.projectResponsibility.split('</p>');
  }

  closeDialog(){
    this.dialogRef.close();
  }
}

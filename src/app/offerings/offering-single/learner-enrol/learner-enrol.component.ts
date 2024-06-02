import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Offering } from '../../../models/Offering.model';

@Component({
  selector: 'app-learner-enrol',
  templateUrl: './learner-enrol.component.html',
  styleUrl: './learner-enrol.component.css'
})
export class LearnerEnrolComponent {
  panelOpenState = false;
  relativeDate: Date = new Date;

  constructor(
    public dialogRef: MatDialogRef<LearnerEnrolComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Offering
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onEnrolClick() {
    console.log(this.relativeDate);
  }

}

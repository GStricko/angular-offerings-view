import { Component, Input } from '@angular/core';
import { OfferingService } from '../../services/offering.service';
import { Offering } from '../../models/Offering.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { LearnerEnrolComponent } from './learner-enrol/learner-enrol.component';

@Component({
  selector: 'app-offering-single',
  templateUrl: './offering-single.component.html',
  styleUrl: './offering-single.component.css'
})
export class OfferingSingleComponent {
  @Input() offering!: Offering;
  displayOfferingDates: boolean = false;

  constructor(
    public offeringService: OfferingService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.offeringService.displayOfferingDates$.subscribe((value) => {
      this.displayOfferingDates = value;
      console.log(this.displayOfferingDates);
    });
  }

  confirmIdHasBeenCopied() {
    this._snackBar.open("Copied to clipboard!", "Dismiss");
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LearnerEnrolComponent, {
      data: {name: this.offering.name},
      width: '400px',
    });
  }
}


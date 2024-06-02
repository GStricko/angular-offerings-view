import { Component, EventEmitter, Output } from '@angular/core';
import { OfferingService } from '../services/offering.service';

@Component({
  selector: 'app-offering-nav-bar',
  templateUrl: './offering-nav-bar.component.html',
  styleUrl: './offering-nav-bar.component.css'
})
export class OfferingNavBarComponent {

  selectedOption: string = '1'; 
  @Output() optionChanged = new EventEmitter<string>();

  displayOfferingDates: boolean = false;

  constructor(
    public offeringService: OfferingService,
  ) { }

  onDisplayDatesChange() {
    this.offeringService.setDisplayOfferingDates(this.displayOfferingDates = !this.displayOfferingDates);
  }

  onChangeOption(option: string) {
    this.selectedOption = option;
    this.optionChanged.emit(option);
  }

}

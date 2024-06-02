import { Component } from '@angular/core';
import { OfferingService } from '../services/offering.service';
import { Offering } from '../models/Offering.model';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrl: './offerings.component.css'
})
export class OfferingsComponent {
  showAllOfferingsSubscription: Subscription = new Subscription;
  offeringList: Offering[] = [];
  selectOfferingToShow: string = "current";
  dropDownControl = new FormControl();
  showLoadingSpinner: boolean = false;
  offeringListLength: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  offeringsToDisplay: number = 10;
  pageIndexToShow: number = 0;
  searchTerm: string = "";
  filteredOfferingList: Offering[] = [];
  displayOfferingDates: boolean = false;
  orderBy: string = "1";
  pageIndexForPagination: number = 0;

  currentPage: number | undefined;
  currentPageSubscription: Subscription = new Subscription;

  constructor(
    public offeringService: OfferingService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getOfferings(this.orderBy);
  }

  getOfferings(orderBy: string) {
    this.orderBy = orderBy;
    this.offeringList = [];
    this.showLoadingSpinner = true;
    this.offeringService.getOfferings(this.selectOfferingToShow, this.orderBy).subscribe({
      next: (response: any) => {
        this.showLoadingSpinner = false;
        this.offeringList = response.data;
        if(this.searchTerm.trim() !== '') {
          this.onSearchTermInput();
        }
        this.offeringListLength = this.offeringList.length;
      },
      error: (error) => {
        console.error('Error fetching offerings:', error);
      }
    });
  }

  ngOnDestroy() {
    if (this.showAllOfferingsSubscription) {
      this.showAllOfferingsSubscription.unsubscribe();
    }
    this.currentPageSubscription.unsubscribe();
  }

  onDropdownChange() {
    this.getOfferings(this.orderBy);
  }

  onLogoutClick() {
    this.router.navigate(["login"])
  }

  onPaginationChange(event: any,) {
    this.offeringsToDisplay = event.pageSize;
    this.pageIndexToShow = this.offeringsToDisplay * event.pageIndex;
    this.pageIndexForPagination = event.pageIndex;
  }

  onSearchTermInput() {
    if (this.searchTerm.trim() !== '') {
      this.filteredOfferingList = this.offeringList.filter(item =>
        item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.contentId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      this.offeringListLength = this.filteredOfferingList.length;
    } else {
      this.filteredOfferingList = this.offeringList;
      this.offeringListLength = this.offeringList.length;
    }
  }

  onDisplayDatesChange() {
    this.offeringService.setDisplayOfferingDates(this.displayOfferingDates = !this.displayOfferingDates);
  }
}

import { Injectable } from '@angular/core';
import { Offering } from '../models/Offering.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferingService {
  offeringsHaveBeenDisplayed: Subject<boolean> = new Subject<boolean>();
  private displayOfferingDatesSubject = new BehaviorSubject<boolean>(false);
  displayOfferingDates$ = this.displayOfferingDatesSubject.asObservable();

  emptyOffering: Offering = {
    id: "",
    name: "",
    start: "",
    end: "",
    hasEarlyCloseOff: false,
    contentId: "",
    isReadonly: false
  }

  constructor(
    private httpService: HttpClient
  ) { }

  getOfferings(offeringsToShow: string, orderBy: string): Observable<Offering[]> {
    return this.httpService.get<Offering[]>(`http://localhost:3000/offerings?offeringsToShow=${offeringsToShow}&orderBy=${orderBy}`);
  }

  setDisplayOfferingDates(value: boolean) {
    this.displayOfferingDatesSubject.next(value);
  }

}

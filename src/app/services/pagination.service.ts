import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private currentPageSubject = new BehaviorSubject<number>(10);
  currentPage$: Observable<number> = this.currentPageSubject.asObservable();

  constructor() { }

  setCurrentPage(page: number) {
    this.currentPageSubject.next(page);
    console.log("service: " + page)
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-offering-pagination-bar',
  templateUrl: './offering-pagination-bar.component.html',
  styleUrl: './offering-pagination-bar.component.css'
})
export class OfferingPaginationBarComponent {
  @Input() length: number = 0;
  @Input() pagesize: number = 10;
  @Input() pageIndex: number = 0;
  @Output() pageChanged = new EventEmitter<any>();

  pageSizeOptions: number[] = [5, 10, 25, 100];

  onPageChange(event: any) {
    this.pageChanged.emit(event);
  }

}

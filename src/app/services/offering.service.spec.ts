import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { OfferingService } from './offering.service';

describe('OfferingServiceService', () => {
  let service: OfferingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(OfferingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

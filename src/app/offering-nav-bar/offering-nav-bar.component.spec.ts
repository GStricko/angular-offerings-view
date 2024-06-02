import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { OfferingNavBarComponent } from './offering-nav-bar.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms'; 

describe('OfferingNavBarComponent', () => {
  let component: OfferingNavBarComponent;
  let fixture: ComponentFixture<OfferingNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferingNavBarComponent],
      imports: [
        HttpClientModule,
        MatRadioModule,
        MatCheckboxModule,
        ReactiveFormsModule 
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferingNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

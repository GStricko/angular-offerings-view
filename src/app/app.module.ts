import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DatePipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { OfferingSingleComponent } from './offerings/offering-single/offering-single.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';
import { LearnerEnrolComponent } from './offerings/offering-single/learner-enrol/learner-enrol.component';
import { OfferingNavBarComponent } from './offering-nav-bar/offering-nav-bar.component';
import { OfferingPaginationBarComponent } from './offering-pagination-bar/offering-pagination-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferingsComponent,
    OfferingSingleComponent,
    LoginComponent,
    LearnerEnrolComponent,
    OfferingNavBarComponent,
    OfferingPaginationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatCheckboxModule,
    DatePipe,
    MatListModule,
    ClipboardModule,
    MatSnackBarModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatExpansionModule,
    MatDatepickerModule,
    MatRadioModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
    { provide: MAT_DATE_LOCALE, useValue: 'en-NZ' },
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

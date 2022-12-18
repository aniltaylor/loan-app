import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { MaterialComponent } from './material/material.component';
import { InterestComponent } from './interest/interest.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { MonthlyPaymentComponent } from './monthly-payment/monthly-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutComponent,
    MaterialComponent,
    InterestComponent,
    LoanCalculatorComponent,
    MonthlyPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

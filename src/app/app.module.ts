import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { AddcustomersComponent } from './components/addcustomers/addcustomers.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HomeComponent,
    EditCustomerComponent,
    AddcustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

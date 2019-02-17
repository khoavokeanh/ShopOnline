import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { HomeComponent } from './components/home/home.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { AddcustomersComponent } from './components/addcustomers/addcustomers.component';

const routes: Routes = [
  {
    path :'index',
    component : HomeComponent
  },
  {
    path : '',
    pathMatch :'full',
    redirectTo : 'index'
  },
  {
    path :'customers',
    component : CustomerComponent
  },
  {
    path : 'customers/:id/edit',
    component : EditCustomerComponent
  },
  {
    path : 'customers/add',
    component : AddcustomersComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

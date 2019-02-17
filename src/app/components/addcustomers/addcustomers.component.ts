import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomersService } from './../../services/customers.service';
import { Customets } from './../../customers.model';

@Component({
  selector: 'app-addcustomers',
  templateUrl: './addcustomers.component.html',
  styleUrls: ['./addcustomers.component.css']
})
export class AddcustomersComponent implements OnInit {
  public subsctiption : Subscription;
  public customer : Customets;

  constructor(
    private _route : Router,
    //private _activatedRroute : ActivatedRoute ,
    private _customersService : CustomersService
  ) { }

  ngOnInit() {
    this.customer = new Customets();
    }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.subsctiption){
      return this.subsctiption.unsubscribe();
    }
  }

  setAddCustomers(){
    this.subsctiption = this._customersService.addCustomer(this.customer).subscribe(data=>{
      this.customer = data;
      return this._route.navigateByUrl('customers');

    })

  }

}

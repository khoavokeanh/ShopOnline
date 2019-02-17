import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomersService } from './../../services/customers.service';
import { Customets } from './../../customers.model';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  public subscriptionParams :Subscription;
  public subsctiption : Subscription;
  public customer : Customets;

  constructor( private _route : Router,
    private _activatedRroute : ActivatedRoute ,
    private _customersService : CustomersService) { }

  ngOnInit() {
    this.customer =new Customets();
    this.loadData();
    
  }

  loadData(){
   this.subscriptionParams = this._activatedRroute.params.subscribe((data : Params)=>{
        let id = data['id'];
        this.subsctiption = this._customersService.getOneCustomer(id).subscribe(oneCustom=>{
          this.customer= oneCustom ;
        })
      
    })

  };
  getOnSave(){
    this.subsctiption = this._customersService.updateCustomer(this.customer).subscribe(data=>{
      this._route.navigateByUrl('customers');

    })

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.subsctiption){
      return this.subsctiption.unsubscribe();
    }

    if(this.subscriptionParams)
    {
      this.subscriptionParams.unsubscribe();
    }
  }


}

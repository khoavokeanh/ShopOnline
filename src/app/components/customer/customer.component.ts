import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomersService } from './../../services/customers.service';
import { Customets} from './../../customers.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public customers : Customets[] = [];
  public subscription : Subscription;

  constructor( private _customersService : CustomersService) { }

  ngOnInit() {
   this.subscription = this._customersService.getAllCustomers().subscribe(data =>{
      this.customers = data;
    })
    return this.subscription;
  }
  deleteCustomers(id : number){
    this.subscription = this._customersService.getDeleteCustomers(id).subscribe(data =>{
      this.updateDataAfterDelete(id);
    });

  }
  updateDataAfterDelete(id :number){
    for(var i=0; i< this.customers.length;i++){
      if(this.customers[i].id == id)
      {
        return this.customers.splice(i,1);
      }

    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.subscription)
    {
      this.subscription.unsubscribe;
    }
  }

}

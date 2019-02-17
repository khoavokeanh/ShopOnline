import { Injectable } from '@angular/core';
import { Customets } from './../customers.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
   public customers : Customets[];
   p : number = 1;
   public APIUrl ="http://localhost:3000/customers";

  constructor( private http :HttpClient) {  }

  getAllCustomers() : Observable<Customets[]>{
    return this.http.get<Customets[]>(this.APIUrl);
  
  }
  getDeleteCustomers(id :number) : Observable<Customets[]>{
    return this.http.delete<Customets[]>(`${this.APIUrl}/${id}`);


  }
  getOneCustomer(id : number) : Observable<Customets>{
    return this.http.get<Customets>(`${this.APIUrl}/${id}`);

  }
  updateCustomer(customers : Customets) : Observable<Customets>{
    return this.http.put<Customets>(`${this.APIUrl}/${customers.id}`,customers);

  }
  addCustomer(customers : Customets): Observable<Customets>{
    return this.http.post<Customets>(this.APIUrl,customers);
  }


}

import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CustDataService {

  constructor(private _http: HttpClient) { }
  url: string = "http://localhost:3000/customer/";
  getAllCustomers() {
    return this._http.get(this.url);
  }
  getCustomerByEmail(email){
    return this._http.get(this.url+email);
  }
  deleteCustomer(email) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + email, { headers: x });
  }
  addCustomer(item) {
    let x = new HttpHeaders().set('Content-type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: x });
  }
  updateCustomer(item) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);

    return this._http.put(this.url + item.email, body, { headers: x });
  }

}


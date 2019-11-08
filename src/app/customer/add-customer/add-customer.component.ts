import { Component, OnInit } from '@angular/core';
import { CustDataService } from '../cust-data.service';
import { CustTbl } from '../cust-tbl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private _data: CustDataService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit(CustomerName, phoneNumber, email, address, state, pincode) {

    let Cust_data: CustTbl = new CustTbl(pincode, CustomerName, phoneNumber, email, address, state);
    this._data.addCustomer(Cust_data).subscribe(
      (data: any) => {
        this._router.navigate(['']);
      }
    )
  }
}

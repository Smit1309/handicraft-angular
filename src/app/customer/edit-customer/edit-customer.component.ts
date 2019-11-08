import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { CustTbl } from '../cust-tbl';
import { CustDataService } from '../cust-data.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  email: string;
  txtCustomerName:string;

  txtemail: string;
  txtaddress: string;
  txtstate: string;
  txtpincode: number;
  txtphoneNumber: string;
  constructor(private act_route: ActivatedRoute, private _router: Router, private _data: CustDataService) {



  }

  ngOnInit() {


    this.email = this.act_route.snapshot.params['email'];
    this._data.getCustomerByEmail(this.email).subscribe(
      (data: CustTbl[]) => {

        console.log(data);
        this.txtCustomerName = data[0].cust_name;
        this.txtphoneNumber = data[0].ph_no;
        this.txtemail = data[0].email;
        this.txtaddress = data[0].address;
        this.txtpincode = data[0].pincode;
        this.txtstate = data[0].state;

      }
    )
  }
  onEditSubmit(){
    let Cust_data: CustTbl = new CustTbl(this.txtpincode, this.txtCustomerName, this.txtphoneNumber, this.txtemail, this.txtaddress, this.txtstate);
    this._data.updateCustomer(Cust_data).subscribe(
      (data:any)=>{
        console.log(Cust_data);
        alert("Updated..");
        this._router.navigate(['']);
      }
    )
  }
}

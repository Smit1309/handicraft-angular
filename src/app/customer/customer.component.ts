import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CustDataService } from './cust-data.service';
import { CustTbl } from './cust-tbl';
import { ViewMoreComponent } from './view-more/view-more.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  dataSource:MatTableDataSource<CustTbl>;
  temparr:CustTbl[];
  displayedColumns:string[]=['cust_name','ph_no','email','action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _data:CustDataService,
      public _dialog:MatDialog,
      private _router:Router) {
    this.dataSource=new MatTableDataSource();
  }
  ngOnInit() {
    this._data.getAllCustomers().subscribe(
      (data:any)=>{
        this.temparr=data;
        this.dataSource.data=data;
        console.log(this.temparr);
        console.log(this.dataSource);
      }
    );
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
   }
  onEdit(row){
    this._dialog.open(ViewMoreComponent,{
      data:row
     })
    };
    onclickEdit(email){
      this._router.navigate(['/editCustomer',email]);
    }

  delCustomer(row){
    if(confirm("Are you sure?")){
      this._data.deleteCustomer(row.email).subscribe(
        (data:any)=>{
          console.log(this.temparr);
          console.log(this.temparr.indexOf(row));
          this.temparr.splice(this.temparr.indexOf(row),1);
          this.dataSource.data=this.temparr;

        }
      )};
  }

}

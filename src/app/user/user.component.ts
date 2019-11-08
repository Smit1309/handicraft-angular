import { Component, OnInit, ViewChild } from '@angular/core';
import { user } from './user-class';

import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
// import { ViewmoreComponent } from '../viewmore/viewmore.component';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { ViewMoreUserComponent } from './view-more-user/view-more-user.component';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  DataSource:MatTableDataSource<user>;
  arr:user[]=[];
  temparr:user[];
  flag:boolean=false;
  displayedColumns:string[]=['delete','email','password','action'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
 onDelete(row)
  {
    if(confirm("are you sure ?"))
    {

      this._user.deleteUserData(row.email).subscribe(
      (data:user)=>
      {
          this.temparr.splice(this.temparr.indexOf(row),1);
          this.DataSource.data=this.temparr;
      }
      );

    }
  }
  onEdit(row)
  {
      this._dialog.open(ViewMoreUserComponent,{
        data:row
      })

  }
  onclickEdit(email)
  {
      this._router.navigate(['editUser',email]);
  }



  constructor(private _user:UserServiceService,public _dialog:MatDialog , public _router:Router) { }
  applyFilter(filterValue: string) {
    this.DataSource.filter = filterValue.trim().toLowerCase();

    if (this.DataSource.paginator) {
      this.DataSource.paginator.firstPage();
    }
  }

  ngOnInit() {
    this._user.getUserData().subscribe(
      (data:any)=>{
         this.temparr=data;
        this.DataSource=data;
      }
    )
  }

}

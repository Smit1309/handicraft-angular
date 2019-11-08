import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from 'src/app/user-service.service';
import { user } from '../user-class';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
email:string;
txtemail:string;
txtpassword:string;
  constructor(private act_route:ActivatedRoute , private _router:Router , private _data:UserServiceService) { }

  ngOnInit() {

    this.email = this.act_route.snapshot.params['email'];
    this._data.getuserByEmail(this.email).subscribe(
      (data: user[]) => {

        console.log(data);
        this.txtemail = data[0].email;
        this.txtpassword = data[0].password;
      }
    )
  }
  onEditSubmit()
  {
    let user_Data : user = new user(this.txtemail,this.txtpassword);
    this._data.updateUser(user_Data).subscribe(
      (data:any)=>
      {
        this._router.navigate(['user']);
      }

    )
  }
  }


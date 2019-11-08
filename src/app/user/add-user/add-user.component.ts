import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/user-service.service';
import { Router } from '@angular/router';
import { user } from '../user-class';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private _data:UserServiceService , private _router:Router) { }

  ngOnInit() {
  }
  onSubmit(email,password)
  {
    let user_Data : user = new user(email,password);
    this._data.addUser(user_Data).subscribe(
      (data:any)=>
      {
        this._router.navigate(['user']);
      }

    )
  }
}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url:string="http://localhost:3000/users/";

  constructor(private _http:HttpClient) { }

  getUserData()
  {
    return this._http.get(this.url);
  }
  deleteUserData(email)
  {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.delete(this.url + email , { headers: x });
  }

  getuserByEmail(email)
  {
    return this._http.get(this.url + email);
  }

  updateUser(item) {
    let x = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);

    return this._http.put(this.url + item.email, body, { headers: x });
  }

  addUser(item) {
    let x = new HttpHeaders().set('Content-type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.post(this.url, body, { headers: x });
  }

}

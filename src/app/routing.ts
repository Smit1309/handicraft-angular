import {Routes, RouterModule} from "@angular/router";
import { CustomerComponent } from './customer/customer.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';



const arr:Routes=[
  {path: '',component:CustomerComponent},
  {path:'addCustomer',component:AddCustomerComponent},
  {path:'editCustomer/:email',component:EditCustomerComponent},
  {path:'user',component:UserComponent},
  {path:'editUser/:email',component:EditUserComponent},
  {path:'AddUser',component:AddUserComponent},

];
export const arr_routing =RouterModule.forRoot(arr);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { arr_routing } from './routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { MatIconModule } from '@angular/material';
import { MatButtonModule, MatTableModule, MatSortModule, MatPaginatorModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ViewMoreComponent } from './customer/view-more/view-more.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './customer/edit-customer/edit-customer.component';
import { UserComponent } from './user/user.component';
import { ViewMoreUserComponent } from './user/view-more-user/view-more-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    MainNavComponent,
    ViewMoreComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    UserComponent,
    ViewMoreUserComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    arr_routing,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,

    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [
    ViewMoreComponent,
    ViewMoreUserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { CustDataService } from '../cust-data.service';
import { CustTbl } from '../cust-tbl';

@Component({
  selector: 'app-view-more',
  templateUrl: './view-more.component.html',
  styleUrls: ['./view-more.component.css']
})
export class ViewMoreComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewMoreComponent>,private _data:CustDataService, @Inject(MAT_DIALOG_DATA) private row:CustTbl) { }
  onCancelClick() {
    this.dialogRef.close();
  }
  data:CustTbl;
  ngOnInit() {
    this.data=this.row;
      }
  }



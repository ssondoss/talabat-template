import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApplicationStateService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rate-order',
  templateUrl: './rate-order.component.html',
  styleUrls: ['./rate-order.component.css', '../../app.component.css'],
})
export class RateOrderComponent implements OnInit {
  currentRate = 0;
  constructor(
    public dialogRef: MatDialogRef<RateOrderComponent>,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public appService: ApplicationStateService
  ) {
    console.log(data);
  }
  rateOrderForm: FormGroup;
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}

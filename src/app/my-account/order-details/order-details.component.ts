import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { ApplicationStateService } from 'src/app/app.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css', '../../app.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<OrderDetailsComponent>,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public appService: ApplicationStateService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}

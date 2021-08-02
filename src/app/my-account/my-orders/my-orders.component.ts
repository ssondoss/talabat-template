import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'src/app/app.service';

import { MatDialog } from '@angular/material/dialog';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { RateOrderComponent } from '../rate-order/rate-order.component';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css', '../../app.component.css'],
})
export class MyOrdersComponent implements OnInit {
  orders: any;
  constructor(
    public appService: ApplicationStateService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  openDialogOrderDetails(): void {
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      width: '700px',
      height: 'auto',
      maxWidth: '98%',
    });
  }

  openDialogRateOrder() {
    const dialogRef = this.dialog.open(RateOrderComponent, {
      width: '700px',
      height: 'auto',
      maxWidth: '98%',
    });
  }
}

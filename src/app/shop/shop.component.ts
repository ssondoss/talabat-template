import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { AddProduct } from './add-product/add-product.component';

import { ApplicationStateService } from '../app.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css', '../app.component.css'],
})
export class ShopComponent implements OnInit {
  currentRate = 5;

  showMenuDiv = true;
  showReviewsDiv = false;
  showInfoDiv = false;
  counter = 1;

  constructor(
    public dialog: MatDialog,
    config: NgbRatingConfig,
    public appService: ApplicationStateService
  ) {
    config.max = 5;
  }

  ngOnInit(): void {}
  showReviews() {
    this.showMenuDiv = false;
    this.showReviewsDiv = true;
    this.showInfoDiv = false;
  }
  showInfo() {
    this.showMenuDiv = false;
    this.showReviewsDiv = false;
    this.showInfoDiv = true;
  }
  showMenu() {
    this.showMenuDiv = true;
    this.showReviewsDiv = false;
    this.showInfoDiv = false;
  }
  showitems = true;

  public showItems() {
    this.showitems = true;
  }
  public unShowItems() {
    this.showitems = false;
  }
  itemAddedToCartAlert() {
    if (this.appService.lang == 'en')
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item added successfuly',
        showConfirmButton: false,
        timer: 1500,
      });
    else
      swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'تم اضافة العنصر بنجاح',
        showConfirmButton: false,
        timer: 1500,
      });
  }
  showFilledCart = false;

  public openDialogAddProduct(product: any) {
    const dialogRef = this.dialog.open(AddProduct, {
      width: '1000px',
      height: 'auto',
      maxWidth: '98%',
      maxHeight: '98%',
      data: product,
    });

    dialogRef.afterClosed().subscribe(async (data) => {
      if (data.event == 'ADDED') {
        this.showFilledCart = true;
      }
    });
  }
  showEmptyCart() {
    this.showFilledCart = false;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 1) this.counter--;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicationStateService } from '../app.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css', '../app.component.css'],
})
export class CheckoutComponent implements OnInit {
  addressForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public appService: ApplicationStateService
  ) {}

  showDelForm = false;
  specialRequestForm = false;
  showDelFormAfterConfirm = false;
  ngOnInit(): void {
    this.addressForm = this.formBuilder.group({
      country: ['', Validators.required],

      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(15),
          Validators.minLength(10),
          Validators.pattern('[0-9]*'),
        ]),
      ],
      city: ['', Validators.required],
      addressLineOne: ['', Validators.required],
      addressLineTwo: [''],
    });
  }
  showDeliveryForm() {
    this.showDelForm = true;
  }
  unshowDeliveryForm() {
    this.showDelForm = false;
    this.showDelFormAfterConfirm = true;
  }
  showSpecialRequestForm() {
    this.specialRequestForm = true;
  }
  unShowSpecialRequestForm() {
    this.specialRequestForm = false;
  }
}

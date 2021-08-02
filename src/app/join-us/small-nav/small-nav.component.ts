import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  arabicLetters,
  emailValidator,
  matchingPasswords,
} from 'src/app/app.component';

import { ApplicationStateService } from 'src/app/app.service';

@Component({
  selector: 'small-nav',
  templateUrl: './small-nav.component.html',
  styleUrls: ['./small-nav.component.css', '../../app.component.css'],
})
export class SmallNavComponent implements OnInit {
  showMerchant = true;
  showShop;
  merchantInfoForm: FormGroup;
  shopDetailsForm: FormGroup;
  tags: any;

  lastUploadedLogo: string;
  showMerchantDetails() {
    this.showMerchant = true;
    this.showShop = false;
  }

  showShopDetails() {
    if (this.merchantInfoForm.valid) {
      this.showMerchant = false;
      this.showShop = true;
    } else {
      this.merchantInfoForm.markAllAsTouched();
    }
  }
  constructor(
    public formBuilder: FormBuilder,
    protected service: ApplicationStateService
  ) {}

  ngOnInit(): void {
    this.shopDetailsForm = this.formBuilder.group({
      nameEnglish: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(100)]),
      ],

      nameArabic: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(100),
          arabicLetters,
        ]),
      ],

      desEnglish: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(250)]),
      ],
      desArabic: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(250),
          arabicLetters,
        ]),
      ],

      tag: ['', Validators.compose([Validators.required])],
      logo: ['', Validators.required],
    });
    this.merchantInfoForm = this.formBuilder.group(
      {
        phone1: [
          '',
          Validators.compose([
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(10),
            // prettier-ignore
            Validators.pattern("[0-9]*"),
          ]),
        ],

        email: [
          '',
          Validators.compose([
            Validators.required,
            Validators.maxLength(150),
            emailValidator,
          ]),
        ],

        phone2: [
          '',
          Validators.compose([
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(10),
            // prettier-ignore
            Validators.pattern("[0-9]*"),
          ]),
        ],
        city: ['', Validators.compose([Validators.required])],
        country: [''],

        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.maxLength(100),
            Validators.minLength(6),
          ]),
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: matchingPasswords('password', 'confirmPassword'),
      }
    );
  }
}

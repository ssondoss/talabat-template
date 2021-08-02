import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationStateService } from '../app.service';
import { AddAddressComponent } from './add-address/add-address.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css', '../app.component.css'],
})
export class MyAccountComponent implements OnInit {
  accountForm: FormGroup;
  email: string;

  constructor(
    public dialog: MatDialog,
    config: NgbRatingConfig,
    public appService: ApplicationStateService,

    private fb: FormBuilder
  ) {
    config.max = 5;
  }

  returnLanguage() {
    return this.appService.lang;
  }

  ngOnInit(): void {
    this.accountForm = this.fb.group({
      phone: [
        '07999999999',
        Validators.compose([
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(15),
          // prettier-ignore
          Validators.pattern("[0-9]*"),
        ]),
      ],
      email: ['info@info.com'],
      username: ['user0123', Validators.required],
    });
  }

  openDialogChangePassword(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '610px',
      height: 'auto',
      maxWidth: '95%',

      data: {},
    });
  }

  openDialogAddAddress(): void {
    const dialogRef = this.dialog.open(AddAddressComponent, {
      width: '600px',
      height: 'auto',
      maxWidth: '95%',
      maxHeight: '98%',
      data: {},
    });
  }
}

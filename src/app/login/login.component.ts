import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  messageWrongEmailOrPassword = false;
  messageRequired = false;
  constructor(public formBuilder: FormBuilder, public dialog: MatDialog) {}
  openDialogForgetPassword(): void {
    const dialogRef = this.dialog.open(ForgetPasswordComponent, {
      width: '420px',
      height: 'auto',
      maxWidth: '95%',

      data: {},
    });
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      password: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(100)]),
      ],
      email: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(150)]),
      ],
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { matchingPasswords } from 'src/app/app.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css', '../../app.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    public formBuilder: FormBuilder
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  changePasswordForm: FormGroup;

  ngOnInit(): void {
    this.changePasswordForm = this.formBuilder.group(
      {
        currentPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(49),
          ]),
        ],
        newPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(49),
          ]),
        ],
        retypePassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(49),
          ]),
        ],
      },
      {
        validator: matchingPasswords('newPassword', 'retypePassword'),
      }
    );
  }
}

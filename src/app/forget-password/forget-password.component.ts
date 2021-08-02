import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { emailValidator } from '../app.component';
import { ApplicationStateService } from '../app.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css', '../app.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ForgetPasswordComponent>,
    public formBuilder: FormBuilder,
    public appService: ApplicationStateService
  ) {}
  forgetPasswordForm: FormGroup;
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(150),
          emailValidator,
        ]),
      ],
    });
  }
}

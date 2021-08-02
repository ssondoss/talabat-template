import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicationStateService } from '../app.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css', '../app.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public appService: ApplicationStateService
  ) {}
  ngOnInit(): void {}
}

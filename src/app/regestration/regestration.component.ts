import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { emailValidator, matchingPasswords } from '../app.component';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css', '../app.component.css'],
})
export class RegestrationComponent implements OnInit {
  regestrationForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.regestrationForm = this.formBuilder.group(
      {
        username: [
          '',
          Validators.compose([
            Validators.required,
            Validators.maxLength(100),
            Validators.minLength(3),
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

        phone: [
          '',
          Validators.compose([
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(10),
            // prettier-ignore
            Validators.pattern("[0-9]*"),
          ]),
        ],
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

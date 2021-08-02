import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApplicationStateService } from 'src/app/app.service';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css', '../../app.component.css'],
})
export class AddAddressComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddAddressComponent>,
    public formBuilder: FormBuilder,
    public appService: ApplicationStateService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  addAddressForm: FormGroup;
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    {
      this.addAddressForm = this.formBuilder.group({
        phone: [
          '',
          Validators.compose([
            Validators.required,
            Validators.maxLength(15),
            Validators.minLength(10),
            Validators.pattern('[0-9]*'),
          ]),
        ],

        addressLineOne: [
          '',
          Validators.compose([Validators.maxLength(500), Validators.required]),
        ],
        addressLineTwo: ['', Validators.compose([Validators.maxLength(500)])],

        country: ['', Validators.required],
        city: ['', Validators.required],
      });
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'src/app/app.service';
import { FormGroup } from '@angular/forms';
import { AddAddressComponent } from '../add-address/add-address.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-saved-addresses',
  templateUrl: './saved-addresses.component.html',
  styleUrls: ['./saved-addresses.component.css', '../../app.component.css'],
})
export class SavedAddressesComponent implements OnInit {
  hasAddress: boolean;
  addressForm: FormGroup;
  constructor(
    public appService: ApplicationStateService,

    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  openDialogAddAddress(): void {
    const dialogRef = this.dialog.open(AddAddressComponent, {
      width: '600px',
      height: 'auto',
      maxWidth: '95%',
      maxHeight: '98%',
      data: { form: this.addressForm },
    });
  }
}

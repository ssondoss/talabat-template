import { Component, OnInit } from '@angular/core';

import { ApplicationStateService } from '../app.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../app.component.css'],
})
export class NavbarComponent implements OnInit {
  public isMobileResolution: boolean;
  viewCountriesDiv = false;
  viewAccountDiv = false;

  constructor(public appService: ApplicationStateService) {}
  ngOnInit(): void {}
  viewCountries() {
    this.viewCountriesDiv = !this.viewCountriesDiv;
  }
  viewAccount() {
    this.viewAccountDiv = !this.viewAccountDiv;
  }
}

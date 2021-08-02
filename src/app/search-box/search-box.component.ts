import { Component, OnInit } from '@angular/core';
import {
  faSearch,
  faBell,
  faUser,
  faMapMarkerAlt,
  faLandmark,
} from '@fortawesome/free-solid-svg-icons';

import { ApplicationStateService } from '../app.service';
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css', '../app.component.css'],
})
export class SearchBoxComponent implements OnInit {
  cities: Object;
  tags: any;
  constructor(public service: ApplicationStateService) {}

  ngOnInit(): void {}
}

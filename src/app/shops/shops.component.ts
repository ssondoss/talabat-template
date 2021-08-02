import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../app.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css', '../app.component.css'],
})
export class ShopsComponent implements OnInit {
  constructor(public service: ApplicationStateService) {}
  ngOnInit(): void {}
}

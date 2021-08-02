import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../app.service';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css', '../app.component.css'],
})
export class JoinUsComponent implements OnInit {
  constructor(public appService: ApplicationStateService) {}
  onEdit() {
    window.scrollTo(0, 0);
  }
  ngOnInit(): void {}
}

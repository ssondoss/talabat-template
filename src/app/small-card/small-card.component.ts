import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApplicationStateService } from '../app.service';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', '../app.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input() shop: any;
  constructor(public appService: ApplicationStateService) {}

  ngOnInit(): void {}

  getStatusEnglish(value: string) {
    switch (value) {
      case 'OPENED':
        return 'Open';
        break;
      case 'CLOSED':
        return 'Close';
        break;
      case 'BUSY':
        return 'Busy';
        break;

      default:
        return 'Open';
    }
  }

  getStatusArabic(value: string) {
    switch (value) {
      case 'OPENED':
        return 'مفتوح';
        break;
      case 'CLOSED':
        return 'مغلق';
        break;
      case 'BUSY':
        return 'مشغول';
        break;

      default:
        return 'مفتوح';
    }
  }

  getStatusEN(status) {}
}

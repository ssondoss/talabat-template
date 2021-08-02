import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedAddressesComponent } from './saved-addresses.component';

describe('SavedAddressesComponent', () => {
  let component: SavedAddressesComponent;
  let fixture: ComponentFixture<SavedAddressesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavedAddressesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

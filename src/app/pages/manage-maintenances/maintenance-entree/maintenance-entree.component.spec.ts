import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceEntreeComponent } from './maintenance-entree.component';

describe('MaintenanceEntreeComponent', () => {
  let component: MaintenanceEntreeComponent;
  let fixture: ComponentFixture<MaintenanceEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancesListComponent } from './maintenances-list.component';

describe('MaintenancesListComponent', () => {
  let component: MaintenancesListComponent;
  let fixture: ComponentFixture<MaintenancesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenancesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

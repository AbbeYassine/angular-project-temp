import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceSortieComponent } from './maintenance-sortie.component';

describe('MaintenanceSortieComponent', () => {
  let component: MaintenanceSortieComponent;
  let fixture: ComponentFixture<MaintenanceSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

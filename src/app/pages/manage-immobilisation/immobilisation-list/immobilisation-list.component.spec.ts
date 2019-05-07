import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmobilisationListComponent } from './immobilisation-list.component';

describe('ImmobilisationListComponent', () => {
  let component: ImmobilisationListComponent;
  let fixture: ComponentFixture<ImmobilisationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmobilisationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmobilisationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

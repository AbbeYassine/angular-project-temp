import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmobilisationFormComponent } from './immobilisation-form.component';

describe('ImmobilisationFormComponent', () => {
  let component: ImmobilisationFormComponent;
  let fixture: ComponentFixture<ImmobilisationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmobilisationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmobilisationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

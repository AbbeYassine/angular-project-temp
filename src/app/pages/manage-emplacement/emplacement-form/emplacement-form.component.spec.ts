import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplacementFormComponent } from './emplacement-form.component';

describe('EmplacementFormComponent', () => {
  let component: EmplacementFormComponent;
  let fixture: ComponentFixture<EmplacementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplacementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplacementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

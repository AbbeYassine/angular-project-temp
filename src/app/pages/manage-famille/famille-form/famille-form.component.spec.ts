import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilleFormComponent } from './famille-form.component';

describe('FamilleFormComponent', () => {
  let component: FamilleFormComponent;
  let fixture: ComponentFixture<FamilleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

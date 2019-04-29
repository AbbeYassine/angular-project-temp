import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplacementListeComponent } from './emplacement-liste.component';

describe('EmplacementListeComponent', () => {
  let component: EmplacementListeComponent;
  let fixture: ComponentFixture<EmplacementListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplacementListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplacementListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

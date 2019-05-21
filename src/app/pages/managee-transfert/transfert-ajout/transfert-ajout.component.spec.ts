import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertAjoutComponent } from './transfert-ajout.component';

describe('TransfertAjoutComponent', () => {
  let component: TransfertAjoutComponent;
  let fixture: ComponentFixture<TransfertAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfertAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

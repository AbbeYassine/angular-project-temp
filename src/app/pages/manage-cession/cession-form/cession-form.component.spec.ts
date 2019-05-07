import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CessionFormComponent } from './cession-form.component';

describe('CessionFormComponent', () => {
  let component: CessionFormComponent;
  let fixture: ComponentFixture<CessionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CessionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CessionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

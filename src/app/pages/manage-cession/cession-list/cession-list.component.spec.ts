import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CessionListComponent } from './cession-list.component';

describe('CessionListComponent', () => {
  let component: CessionListComponent;
  let fixture: ComponentFixture<CessionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CessionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CessionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

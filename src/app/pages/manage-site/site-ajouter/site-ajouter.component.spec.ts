import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAjouterComponent } from './site-ajouter.component';

describe('SiteAjouterComponent', () => {
  let component: SiteAjouterComponent;
  let fixture: ComponentFixture<SiteAjouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteAjouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAjouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

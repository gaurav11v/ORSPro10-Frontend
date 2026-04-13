import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatetemplateListComponent } from './certificatetemplate-list.component';

describe('CertificatetemplateListComponent', () => {
  let component: CertificatetemplateListComponent;
  let fixture: ComponentFixture<CertificatetemplateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatetemplateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatetemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

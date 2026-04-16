import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecryptionListComponent } from './decryption-list.component';

describe('DecryptionListComponent', () => {
  let component: DecryptionListComponent;
  let fixture: ComponentFixture<DecryptionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecryptionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecryptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

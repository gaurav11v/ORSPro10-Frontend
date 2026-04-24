import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordresetListComponent } from './passwordreset-list.component';

describe('PasswordresetListComponent', () => {
  let component: PasswordresetListComponent;
  let fixture: ComponentFixture<PasswordresetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordresetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordresetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

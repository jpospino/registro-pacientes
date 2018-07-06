import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdAlertBasicComponent } from './ngbd-alert-basic.component';

describe('NgbdAlertBasicComponent', () => {
  let component: NgbdAlertBasicComponent;
  let fixture: ComponentFixture<NgbdAlertBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdAlertBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdAlertBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

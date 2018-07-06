import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionPacienteComponent } from './identificacion-paciente.component';

describe('IdentificacionPacienteComponent', () => {
  let component: IdentificacionPacienteComponent;
  let fixture: ComponentFixture<IdentificacionPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificacionPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

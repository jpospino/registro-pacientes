import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NgbdDatepickerPopupComponent } from './components/common/ngbd-datepicker-popup/ngbd-datepicker-popup.component';
import { IdentificacionPacienteComponent } from './components/identificacion-paciente/identificacion-paciente.component';
import { NgbdTypeaheadFormatComponent } from './components/common/ngbd-typeahead-format/ngbd-typeahead-format.component';
import { NgbdAlertBasicComponent } from './components/common/ngbd-alert-basic/ngbd-alert-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    NgbdDatepickerPopupComponent,
    IdentificacionPacienteComponent,
    NgbdTypeaheadFormatComponent,
    NgbdAlertBasicComponent
  ],
  imports: [
    CommonModule,BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

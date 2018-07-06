import { Component } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { AlertData } from './classes/alert-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alertData : AlertData = { message : 'Hola mundo', type : 'success' };
  
}

import { Component, OnInit,Input } from '@angular/core';
import { AlertData } from '../../../classes/alert-data';

@Component({
  selector: 'app-ngbd-alert-basic',
  templateUrl: './ngbd-alert-basic.component.html',
  styleUrls: ['./ngbd-alert-basic.component.css']
})
export class NgbdAlertBasicComponent{
  @Input() alertData : AlertData;

  arlertShow = AlertData;
}

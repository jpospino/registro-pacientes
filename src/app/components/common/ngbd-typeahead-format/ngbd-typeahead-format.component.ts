import {Component, OnInit, EventEmitter, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { KeyValue } from '../../../classes/key-value';


@Component({
  selector: 'app-ngbd-typeahead-format',
  templateUrl: './ngbd-typeahead-format.component.html',
  styleUrls: ['./ngbd-typeahead-format.component.css']
})
export class NgbdTypeaheadFormatComponent {
  @Input() entries : Array<KeyValue>

  constructor() { 
    console.log('entro 1');
  }


  formatter = (result: string) => result.toUpperCase();

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term === '' ? []
        : this.entries.filter(v => v.value.toLowerCase().indexOf(term.toLowerCase()) > -1).map(function(item){ return item.value; }).slice(0, 10))
    );
}

import {Component} from '@angular/core';
import {STRINGS} from '../strings';

@Component({
  selector: 'app-textbox',
  templateUrl: './app-textbox.component.html',
  styleUrls: ['./app-textbox.component.css']
})
export class AppTextboxComponent {
  strings = STRINGS;
  constructor() {}

}

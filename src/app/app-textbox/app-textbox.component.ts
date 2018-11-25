import { Component, OnInit, Input } from '@angular/core';
import {STRINGS} from '../strings';

@Component({
  selector: 'app-textbox',
  templateUrl: './app-textbox.component.html',
  styleUrls: ['./app-textbox.component.css']
})
export class AppTextboxComponent implements OnInit {
  strings =  STRINGS;
  @Input() current_message: string;
  constructor() { }

  ngOnInit() {}

}

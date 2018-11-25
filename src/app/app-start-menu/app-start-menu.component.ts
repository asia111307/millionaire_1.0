import {Component, OnInit, Output, EventEmitter, Input, OnChanges} from '@angular/core';
import {STRINGS} from '../strings';
import {PresenterTextService} from '../presenter-text.service';

@Component({
  selector: 'app-start-menu',
  templateUrl: './app-start-menu.component.html',
  styleUrls: ['./app-start-menu.component.css']
})
export class AppStartMenuComponent implements OnInit, OnChanges {
  @Output() user_name = new EventEmitter();
  current_text: string;
  strings =  STRINGS;
  constructor(private presenterTextService: PresenterTextService) {}

  ngOnInit() {
    this.current_text = this.strings[0];
  }
  ngOnChanges() {
    this.current_text = this.presenterTextService.readValue();
  }
  getName(name) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    this.user_name.emit(name);
    localStorage.setItem('user_name', name);
    localStorage.getItem('user_name');
  }

}

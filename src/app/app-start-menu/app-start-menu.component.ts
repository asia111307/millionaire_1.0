import {Component, OnInit} from '@angular/core';
import {STRINGS} from '../strings';
import {PresenterTextService} from '../presenter-text.service';
import {CurrentValuesService} from '../current-values.service';

@Component({
  selector: 'app-start-menu',
  templateUrl: './app-start-menu.component.html',
  styleUrls: ['./app-start-menu.component.css']
})
export class AppStartMenuComponent implements OnInit {
  current_text: string;
  strings =  STRINGS;
  constructor(
    private presenterTextService: PresenterTextService,
    private currentValuesService: CurrentValuesService
  ) {}
  getName(name) {
    this.currentValuesService.saveName(name);
  }
  ngOnInit() {
    this.current_text = this.strings[0];
  }
}

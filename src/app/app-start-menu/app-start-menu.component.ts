import {Component, OnInit} from '@angular/core';
import {STRINGS} from '../strings';
import {PresenterTextService} from '../presenter-text.service';
import {CurrentValuesService} from '../current-values.service';
import {Router} from '@angular/router';
import {AppAnswQuestComponent} from '../app-answ-quest/app-answ-quest.component';

@Component({
  providers: [AppAnswQuestComponent],
  selector: 'app-start-menu',
  templateUrl: './app-start-menu.component.html',
  styleUrls: ['./app-start-menu.component.css']
})
export class AppStartMenuComponent implements OnInit {
  current_text: string;
  strings =  STRINGS;
  constructor(
    private presenterTextService: PresenterTextService,
    private currentValuesService: CurrentValuesService,
    private router: Router,
    private answQuestComponent: AppAnswQuestComponent
  ) {}
  getName(name) {
    this.currentValuesService.saveName(name);
    this.answQuestComponent.nextQuestion();
    this.router.navigate(['/main']);
  }
  ngOnInit() {
    this.current_text = this.strings[0];
  }
}

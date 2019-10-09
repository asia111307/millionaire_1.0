import {Component, OnInit} from '@angular/core';
import {STRINGS} from '../../strings';
import {CurrentValuesService} from '../../current-values.service';
import {Router} from '@angular/router';
import {AppAnswQuestComponent} from '../../main-window/answers-question/app-answ-quest/app-answ-quest.component';
import {QuestionsService} from "../../questions.service";

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
    private currentValuesService: CurrentValuesService,
    private router: Router,
    private answQuestComponent: AppAnswQuestComponent,
    private questionsService: QuestionsService
  ) {}
  startGame(name) {
    if (name) {
      this.currentValuesService.showGameElementsAfterStart();
      this.currentValuesService.saveName(name);
      this.router.navigate(['/main']);
      (<HTMLElement>document.getElementsByClassName('mainmenu')[0]).style.display = 'none';
      const gametype = (<HTMLInputElement>document.querySelector('input[name="gametype"]:checked')).value;
      this.questionsService.setGameType(gametype);
      setTimeout(() => {
        this.answQuestComponent.nextQuestion();
        }, 1000);
    }
  }
  seeInstructions() {
    this.router.navigate(['/instructions']);
  }
  ngOnInit() {
    this.currentValuesService.hideGameElementsOnStart();
    this.current_text = this.strings[0];
    (<HTMLElement>document.getElementsByClassName('mainmenu')[0]).style.display = 'block';
  }
}

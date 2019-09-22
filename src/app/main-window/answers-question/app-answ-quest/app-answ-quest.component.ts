import {Component, OnInit} from '@angular/core';
import {QuestionsService} from '../../../questions.service';
import {CurrentValuesService} from '../../../current-values.service';

@Component({
  selector: 'app-answ-quest',
  templateUrl: './app-answ-quest.component.html',
  styleUrls: ['./app-answ-quest.component.css']
})
export class AppAnswQuestComponent implements OnInit {
  constructor(private questionsService: QuestionsService, private currentValuesService: CurrentValuesService) {
    this.currentValuesService.disableAnswersAndHelpers();
  }
  nextQuestion() {
    setTimeout(() => {
      this.currentValuesService.updateStage();
      this.currentValuesService.updateCurrentStageValue();
    }, 1000);
    setTimeout(() => {
      this.questionsService.choose_box();
      this.currentValuesService.enableAnswersAndHelpers();
      (<HTMLButtonElement>document.getElementsByClassName('endGameButton')[0]).style.pointerEvents = 'auto';
    }, 2000);
  }
  ngOnInit() {
    this.currentValuesService.disableAnswersAndHelpers();
  }
}

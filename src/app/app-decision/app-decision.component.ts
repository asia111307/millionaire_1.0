import { Component, OnInit } from '@angular/core';
import {IsAnswerCorrectService} from '../is-answer-correct.service';
import {AppAnswQuestComponent} from '../app-answ-quest/app-answ-quest.component';

@Component({
  providers: [AppAnswQuestComponent],
  selector: 'app-app-decision',
  templateUrl: './app-decision.component.html',
  styleUrls: ['./app-decision.component.css']
})
export class AppDecisionComponent implements OnInit {
  isCorrect: boolean;
  current_text: string;
  constructor(private isAnswerCorrectService: IsAnswerCorrectService,  private answQuestCoponent: AppAnswQuestComponent) { }

  ngOnInit() {
    this.isCorrect = this.isAnswerCorrectService.readValue();
  }

  nextQuestion() {
  this.answQuestCoponent.ngOnInit();
}

}

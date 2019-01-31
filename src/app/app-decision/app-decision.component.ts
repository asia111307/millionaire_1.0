import {Component, OnInit} from '@angular/core';
import {AppAnswQuestComponent} from '../app-answ-quest/app-answ-quest.component';
import {QuestionsService} from '../questions.service';
import {Router} from '@angular/router';
import {CurrentValuesService} from '../current-values.service';

@Component({
  providers: [AppAnswQuestComponent],
  selector: 'app-app-decision',
  templateUrl: './app-decision.component.html',
  styleUrls: ['./app-decision.component.css']
})
export class AppDecisionComponent implements OnInit {
  isCorrect: boolean;
  wonPrize: number;
  wonPrizeValue = '';
  usedQuestions: number;
  constructor(
    private router: Router,
    private currentValuesService: CurrentValuesService,
    private answQuestCoponent: AppAnswQuestComponent,
    private questionsService: QuestionsService
  ) {
    this.currentValuesService.currentPrize$.subscribe((value: number) => {
      this.wonPrize = value;
      if (this.currentValuesService.valuesReached.includes(value)) {
        if (value === 1000000) {
          this.wonPrizeValue += 'główną nagrodę: ';
        } else {
          this.wonPrizeValue += 'gwarantowaną sumę ';
        }
      }
      if (value === 1000000) {
        this.wonPrizeValue += 'milion';
      } else if (value === 500) {
        this.wonPrizeValue += '500';
      } else if (value === 0) {
        this.wonPrizeValue += '0';
      } else if (value !== 0) {
        this.wonPrizeValue += `${value / 1000} 000`;
      }} );
  }
  nextQuestion() {
    this.currentValuesService.disableAnswersAndHelpers();
    this.currentValuesService.updateIsHalfUsed(false);
    const answ = document.querySelectorAll('.answer');
    for (let i = 0; i < answ.length; i++) {
      answ[i].classList.remove('selected-answer');
      answ[i].classList.remove('correct-answer');
    }
    const answ_p = document.querySelectorAll('.answer_p');
    for (let j = 0; j < answ.length; j++) {
      (<HTMLElement>answ_p[j]).style.display = 'block';
      (<HTMLElement>answ_p[j]).parentElement.style.pointerEvents = 'none';
    }
    this.questionsService.clearValues();
    this.router.navigate(['/main']);
    this.answQuestCoponent.nextQuestion();
  }
  restartGame() {
    this.currentValuesService.updateEndGame('gameover');
    this.router.navigate(['/summary']);
  }
  ngOnInit() {
    this.isCorrect = this.currentValuesService.readIsAnswerCorrect();
    this.usedQuestions = this.questionsService.used_questions.length;
  }
}

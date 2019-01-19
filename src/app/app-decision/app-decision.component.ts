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
  constructor(
    private router: Router,
    private currentValuesService: CurrentValuesService,
    private answQuestCoponent: AppAnswQuestComponent,
    private questionsService: QuestionsService
  ) {}
  nextQuestion() {
    this.currentValuesService.disableAnswers();
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
    window.location.reload();
  }
  ngOnInit() {
    this.isCorrect = this.currentValuesService.readIsAnswerCorrect();
  }
}

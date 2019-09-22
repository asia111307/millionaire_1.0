import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {QuestionsService} from '../../../questions.service';
import {CurrentValuesService} from '../../../current-values.service';

@Component({
  selector: 'app-answers',
  templateUrl: './app-answers.component.html',
  styleUrls: ['./app-answers.component.css']
})
export class AppAnswersComponent implements OnInit {
  answers = ['', '', '', ''];
  correct: string;
  constructor(
    private router: Router,
    private questionsService: QuestionsService,
    private currentValuesService: CurrentValuesService
  ) {
    this.questionsService.answers$.subscribe((answers: any) => { this.answers = answers; });
    this.questionsService.correct$.subscribe((correct: string) => { this.correct = correct; } );
  }
  checkAnswer(answer) {
    this.currentValuesService.disableAnswersAndHelpers();
    (<HTMLButtonElement>document.getElementsByClassName('endGameButton')[0]).style.pointerEvents = 'none';
    const answ = document.getElementById(answer);
    answ.classList.add('selected-answer');
    if (answer === this.correct) {
      this.currentValuesService.updateIsAnswerCorrect(true);
      this.currentValuesService.updateCurrentPrize();
      setTimeout(() => {
        answ.classList.add('correct-answer');
        this.router.navigate(['decision']);
        }, 2000);
    } else {
      this.currentValuesService.updateIsAnswerCorrect(false);
      const corr = document.getElementById(this.correct);
      setTimeout(() => {
        corr.classList.add('correct-answer');
        this.router.navigate(['decision']);
        }, 2000);
    }
  }
  ngOnInit() {
    this.currentValuesService.disableAnswersAndHelpers();
    (<HTMLButtonElement>document.getElementsByClassName('endGameButton')[0]).style.pointerEvents = 'none';
  }
}

import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {QuestionsService} from '../questions.service';
import {CurrentValuesService} from '../current-values.service';

@Component({
  selector: 'app-answers',
  templateUrl: './app-answers.component.html',
  styleUrls: ['./app-answers.component.css']
})
export class AppAnswersComponent implements OnInit, OnChanges {
  answers: any;
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
    this.currentValuesService.disableAnswers();
    const answ = document.getElementById(answer);
    answ.classList.add('selected-answer');
    if (answer === this.correct) {
      this.currentValuesService.updateIsAnswerCorrect(true);
      setTimeout(() => {
        answ.classList.add('correct-answer');
        this.router.navigate(['decision']);
        }, 3000);
    } else {
      this.currentValuesService.updateIsAnswerCorrect(false);
      const corr = document.getElementById(this.correct);
      setTimeout(() => {
        corr.classList.add('correct-answer');
        this.router.navigate(['decision']);
        }, 3000);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    this.currentValuesService.disableAnswers();
  }
  ngOnInit() {
    this.currentValuesService.disableAnswers();
  }
}

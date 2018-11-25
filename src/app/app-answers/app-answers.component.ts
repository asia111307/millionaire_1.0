import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {IsAnswerCorrectService} from '../is-answer-correct.service';

@Component({
  selector: 'app-answers',
  templateUrl: './app-answers.component.html',
  styleUrls: ['./app-answers.component.css']
})
export class AppAnswersComponent implements OnInit {
  @Input() answers: any;
  @Input() correct: string;
  isCorrect: boolean;
  constructor(private router: Router, private isCorrectAnswerService: IsAnswerCorrectService) { }

  ngOnInit() {}

  checkAnswer(answer) {
    const  answ = document.getElementById(answer);
    answ.classList.add('selected-answer');
    if (answer === this.correct) {
      setTimeout(() => {
        answ.classList.add('correct-answer');
        this.isCorrect = true;
        this.isCorrectAnswerService.saveValue(this.isCorrect);
        this.router.navigate(['decision']);
        }, 3000);
    } else {
      const corr = document.getElementById(this.correct);
      setTimeout(() => {
        corr.classList.add('correct-answer');
        this.isCorrect = false;
        this.isCorrectAnswerService.saveValue(this.isCorrect);
        this.router.navigate(['decision']);
        }, 3000);
    }
  }
}

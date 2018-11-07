import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-answers',
  templateUrl: './app-answers.component.html',
  styleUrls: ['./app-answers.component.css']
})
export class AppAnswersComponent implements OnInit {
  @Input() answers: any;
  @Input() correct: string;
  isCorrect: boolean;
  constructor() { }

  ngOnInit() {}

  checkAnswer(answer) {
    const  answ = document.getElementById(answer);
    answ.classList.add('selected-answer');
    if (answer === this.correct) {
      setTimeout(function() {
        answ.classList.add('correct-answer');}, 3000);
      this.isCorrect = true;
    } else {
      const corr = document.getElementById(this.correct);
      setTimeout(function() {
        corr.classList.add('correct-answer');}, 3000;
    }
  }
}

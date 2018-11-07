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

  checkAnswer(answer_value) {
    if (answer_value === this.correct) {
      this.isCorrect = true;
    }
  }
}

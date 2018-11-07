import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Milionerzy dla kognitywistów';
  @Input() username: string = '';
  @Input() answers: string[] = [];
  @Input() correct: string = '';
  constructor() {}
  ngOnInit() {}

  handleName(name) {
    this.username = name;
  }
  handleCorrect(corr) {
    this.correct = corr;
  }
  handleAnswers(answ) {
    this.answers = answ;
  }
}


import {Component, Input, OnInit} from '@angular/core';
import {STRINGS} from '../strings';

@Component({
  selector: 'app-helpers',
  templateUrl: './app-helpers.component.html',
  styleUrls: ['./app-helpers.component.css']
})
export class AppHelpersComponent implements OnInit {
  isPeopleUsed = false;
  isPhoneUsed = false;
  isHalfUsed = false;
  @Input() correct: string;
  @Input() answers: string[];
  strings = STRINGS;

  constructor() { }

  ngOnInit() {}

  handlePeople() {}

  handlePhone() {}

  handleHalf() {
    if (this.isHalfUsed) {
      return this.strings[1];
    } else {
      this.isHalfUsed = true;
    }
    const answs = ['answer_a', 'answer_b', 'answer_c', 'answer_d'];
    var second_answ: string = this.answers[answs.indexOf(this.correct)];
    while(this.answers.indexOf(second_answ) === answs.indexOf(this.correct)) {
      second_answ = this.answers[Math.floor(Math.random() * 4)];
      if (this.answers.indexOf(second_answ) !== answs.indexOf(this.correct)) {
        for (let i = 0; i < 4; i++) {
          if (i !== answs.indexOf(this.correct) && i !== this.answers.indexOf(second_answ)) {
            const element = document.getElementById(answs[i]);
            element.innerHTML = '';
          }
        }
      }
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {STRINGS} from '../strings';
import {QuestionsService} from '../questions.service';

@Component({
  selector: 'app-app-people',
  templateUrl: './app-people.component.html',
  styleUrls: ['./app-people.component.css']
})
export class AppPeopleComponent implements OnInit {
  isPeopleUsed = false;
  correct: string;
  strings = STRINGS;
  a: number;
  b: number;
  c: number;
  d: number;
  constructor(
    private questionsService: QuestionsService
  ) {
    this.questionsService.correct$.subscribe((correct: string) => { this.correct = correct; } );
  }
  handlePeople() {
    if (this.isPeopleUsed) {
      return this.strings[1];
    } else {
      this.isPeopleUsed = true;
    }
    // this.current_text = this.strings[17];
    let correct_answer = '';
    if (this.correct === 'answer_a') {
      correct_answer = 'A';
    }
    if (this.correct === 'answer_b') {
      correct_answer = 'B';
    }
    if (this.correct === 'answer_c') {
      correct_answer = 'C';
    }
    if (this.correct === 'answer_d') {
      correct_answer = 'D';
    }
    const KNOWS = ['know', 'not_know', 'know', 'know', 'know'];
    const know = KNOWS[Math.floor(Math.random() * KNOWS.length)];
    console.log(know);
    const ANSWRS = ['A', 'B', 'C', 'D'];
    const OUTCOME = {};
    if (know === 'know') {
      const corr_percent: number = Math.floor(Math.random() * 4 + 51);
      const b: number = Math.floor(Math.random() * (100 - corr_percent));
      const c: number = Math.floor(Math.random() * (100 - corr_percent - b));
      const d: number = 100 - corr_percent - b - c;
      const possibles = [b, c, d];
      for (let i = 0; i < 4; i++) {
        if (ANSWRS[i] === correct_answer) {
          OUTCOME[ANSWRS[i]] = corr_percent;
        } else {
          const random_answr_perc = possibles[Math.floor(Math.random() * 3)];
          OUTCOME[ANSWRS[i]] = random_answr_perc;
          possibles.splice(possibles.indexOf(random_answr_perc), 1);
        }
      }
      console.log(corr_percent, b, c, d);
    } else {
      const a: number = Math.floor(Math.random() * 51);
      const b: number = Math.floor(Math.random() * (100 - a));
      const c: number = Math.floor(Math.random() * (100 - a - b));
      const d: number = 100 - a - b - c;
      console.log(a, b, c, d);
      OUTCOME['A'] = a;
      OUTCOME['B'] = b;
      OUTCOME['C'] = c;
      OUTCOME['D'] = d;
    }
    console.log(OUTCOME);
    this.a = OUTCOME['A'];
    document.getElementById('white-bar_a').style.height = `${100 - this.a}%`;
    this.b = OUTCOME['B'];
    document.getElementById('white-bar_b').style.height = `${100 - this.b}%`;
    this.c = OUTCOME['C'];
    document.getElementById('white-bar_c').style.height = `${100 - this.c}%`;
    this.d = OUTCOME['D'];
    document.getElementById('white-bar_d').style.height = `${100 - this.d}%`;
  }
  ngOnInit() {
    this.correct = this.questionsService.correct;
    const people_hover = document.getElementById('people');
    people_hover.style.pointerEvents = 'none';
    const people = document.getElementById('people_2');
    people.classList.add('disabled');
    console.log(this.correct);
    setTimeout(() => {this.handlePeople(); }, 2000);
  }
}

import {Component, OnInit} from '@angular/core';
import {STRINGS} from '../strings';
import {QuestionsService} from '../questions.service';
import {CurrentValuesService} from '../current-values.service';

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
  isHalfUsed: boolean;
  halfAnswers: any;
  people_outcomes: any;
  constructor(
    private questionsService: QuestionsService,
    private currentValuesService: CurrentValuesService,
  ) {
    this.questionsService.correct$.subscribe((correct: string) => { this.correct = correct; } );
    this.currentValuesService.isHalfUsed$.subscribe((isUsed: boolean) => { this.isHalfUsed = isUsed; } );
  }
  handlePeople() {
    if (this.isPeopleUsed) {
      return this.strings[1];
    } else {
      this.isPeopleUsed = true;
    }
    const correct_answer = this.currentValuesService.mapAnswers(this.correct);
    const KNOWS = ['not_know', 'know', 'know', 'know'];
    const know = KNOWS[Math.floor(Math.random() * KNOWS.length)];
    const ANSWRS = ['A', 'B', 'C', 'D'];
    const OUTCOME = {};
    if (!this.isHalfUsed) {
      if (know === 'know') {
        const corr_percent: number = Math.floor(Math.random() * 49 + 51);
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
      for (let z = 0; z < 4; z++) {
        (<HTMLElement>this.people_outcomes[z]).style.display = 'inline-block';
      }
    } else {
      const second_answer = this.currentValuesService.mapAnswers(this.halfAnswers[1]);
      let corr_percent: number;
      if (know === 'know') {
        corr_percent = Math.floor(Math.random() * 49 + 51);
      } else {
        corr_percent = Math.floor(Math.random() * 100);
      }
      const rest = 100 - corr_percent;
      for (let i = 0; i < 4; i++) {
        if (ANSWRS[i] === correct_answer || ANSWRS[i] === second_answer) {
          if (ANSWRS[i] === correct_answer) {
            OUTCOME[ANSWRS[i]] = corr_percent;
          } else if (ANSWRS[i] === second_answer) {
            OUTCOME[second_answer] = rest;
          }
          (<HTMLElement>document.getElementsByClassName(ANSWRS[i])[0]).style.display = 'inline-block';
        }
      }
    }
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
    this.halfAnswers = this.currentValuesService.halfAnswers;
    this.correct = this.questionsService.correct;
    document.getElementById('people').style.pointerEvents = 'none';
    document.getElementById('people_2').classList.add('disabled');
    this.people_outcomes = document.getElementsByClassName('people-outcome');
    for (let k = 0; k < 4; k++) {
      (<HTMLElement>this.people_outcomes[k]).style.display = 'none';
    }
    setTimeout(() => { this.handlePeople(); }, 2000);
  }
}

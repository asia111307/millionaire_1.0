import {Component, OnInit} from '@angular/core';
import {STRINGS} from '../strings';
import {QuestionsService} from '../questions.service';
import {AppHelpersComponent} from '../app-helpers/app-helpers.component';
import {CurrentValuesService} from '../current-values.service';

@Component({
  providers: [AppHelpersComponent],
  selector: 'app-app-phone',
  templateUrl: './app-phone.component.html',
  styleUrls: ['./app-phone.component.css']
})
export class AppPhoneComponent implements OnInit {
  isPhoneUsed = false;
  isHalfUsed: boolean;
  correct: string;
  answers: any;
  strings = STRINGS;
  random_name: string;
  message: string;
  halfAnswers: any;
  constructor(
    private questionsService: QuestionsService,
    private currentValuesService: CurrentValuesService,
  ) {
    this.questionsService.answers$.subscribe((answers: any) => { this.answers = answers; } );
    this.questionsService.correct$.subscribe((correct: string) => { this.correct = correct; } );
    this.currentValuesService.isHalfUsed$.subscribe((isUsed: boolean) => { this.isHalfUsed = isUsed; } );
  }
  handlePhone() {
    if (this.isPhoneUsed) {
      return this.strings[1];
    } else {
      this.isPhoneUsed = true;
    }
    const correct_answer = this.currentValuesService.mapAnswers(this.correct);
    const NAMES = ['Darek', 'Kaziu', 'Ireneusz', 'Anastazja', 'Grażyna', 'Janusz', 'Monika', 'Halina', 'Agnieszka', 'Brajan', 'Karina',
      'Dżesika', 'Marek', 'Krzysztof', 'Basia', 'Andrzej', 'Mariusz', 'Sylwia', 'Karolina', 'Marta', 'Konrad'];
    this.random_name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const THINKING = [STRINGS[20], STRINGS[21], STRINGS[22]];
    const think = THINKING[Math.floor(Math.random() * THINKING.length)];
    setTimeout(() => {this.message = `${think}`; }, 2000);
    const KNOWS = ['not_know', 'know', 'know'];
    const know = KNOWS[Math.floor(Math.random() * KNOWS.length)];
    console.log(this.isHalfUsed);
    console.log(know);
    if (know === 'know') {
      const texts = [STRINGS[8], STRINGS[9], STRINGS[10], STRINGS[11]];
      const response = texts[Math.floor(Math.random() * texts.length)];
      setTimeout(() => {this.message = `${response} ${correct_answer}.`; }, 5000);
    } else if (know === 'not_know') {
      const texts = [STRINGS[12], STRINGS[13], STRINGS[14], STRINGS[15]];
      const response = texts[Math.floor(Math.random() * texts.length)];
      let RAND_GROUP = [];
      if (!this.isHalfUsed) {
        RAND_GROUP = ['A', 'B', 'C', 'D'];
      } else {
        console.log(this.halfAnswers);
        RAND_GROUP = [this.currentValuesService.mapAnswers(this.halfAnswers[0]), this.currentValuesService.mapAnswers(this.halfAnswers[1])];
        console.log(RAND_GROUP);
      }
      const rand_answer = RAND_GROUP[Math.floor(Math.random() * RAND_GROUP.length)];
      setTimeout(() => {this.message = `${response} ${rand_answer}.`; }, 5000);
    }
  }
  ngOnInit() {
    this.halfAnswers = this.currentValuesService.halfAnswers;
    this.correct = this.questionsService.correct;
    const phone_hover = document.getElementById('phone');
    phone_hover.style.pointerEvents = 'none';
    const phone = document.getElementById('phone_2');
    phone.classList.add('disabled');
    this.handlePhone();
  }
}

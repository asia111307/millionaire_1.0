import {Component, OnInit} from '@angular/core';
import {STRINGS} from '../strings';
import {QuestionsService} from '../questions.service';

@Component({
  selector: 'app-app-phone',
  templateUrl: './app-phone.component.html',
  styleUrls: ['./app-phone.component.css']
})
export class AppPhoneComponent implements OnInit {
  isPhoneUsed = false;
  correct: string;
  answers: any;
  strings = STRINGS;
  random_name: string;
  message: string;
  constructor(
    private questionsService: QuestionsService
  ) {
    this.questionsService.answers$.subscribe((answers: any) => { this.answers = answers; } );
    this.questionsService.correct$.subscribe((correct: string) => { this.correct = correct; } );
  }
  handlePhone() {
    if (this.isPhoneUsed) {
      return this.strings[1];
    } else {
      this.isPhoneUsed = true;
    }
    // this.current_text = this.strings[3];
    let correct_answer = '';
    console.log(this.correct);
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
    const NAMES = ['Darek', 'Kaziu', 'Ireneusz', 'Anastazja', 'Grażyna', 'Janusz', 'Monika', 'Halina', 'Agnieszka', 'Brajan', 'Karina',
      'Dżesika', 'Marek', 'Krzysztof', 'Basia', 'Andrzej', 'Mariusz', 'Sylwia', 'Karolina', 'Marta', 'Konrad'];
    this.random_name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const THINKING = [STRINGS[20], STRINGS[21], STRINGS[22]];
    const think = THINKING[Math.floor(Math.random() * THINKING.length)];
    setTimeout(() => {this.message = `${think}`; }, 2000);
    const KNOWS = ['know', 'not_know'];
    const know = KNOWS[Math.floor(Math.random() * KNOWS.length)];
    if (know === 'know') {
      const texts = [STRINGS[8], STRINGS[9], STRINGS[10], STRINGS[11]];
      const response = texts[Math.floor(Math.random() * texts.length)];
      setTimeout(() => {this.message = `${response} ${correct_answer}.`; }, 5000);
    } else if (know === 'not_know') {
      const texts = [STRINGS[12], STRINGS[13], STRINGS[14], STRINGS[15]];
      const RAND_GROUP = ['A', 'B', 'C', 'D'];
      const response = texts[Math.floor(Math.random() * texts.length)];
      const rand_answer = RAND_GROUP[Math.floor(Math.random() * RAND_GROUP.length)];
      setTimeout(() => {this.message = `${response} ${rand_answer}.`; }, 5000);
    }
  }
  ngOnInit() {
    this.correct = this.questionsService.correct;
    console.log(this.correct);
    const phone_hover = document.getElementById('phone');
    phone_hover.style.pointerEvents = 'none';
    const phone = document.getElementById('phone_2');
    phone.classList.add('disabled');
    this.handlePhone();
  }
}

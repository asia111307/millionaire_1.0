import {Component, OnInit} from '@angular/core';
import {STRINGS} from '../strings';
import {QuestionsService} from '../questions.service';
import {CurrentValuesService} from '../current-values.service';

@Component({
  selector: 'app-helpers',
  templateUrl: './app-helpers.component.html',
  styleUrls: ['./app-helpers.component.css']
})
export class AppHelpersComponent implements OnInit {
  isHalfUsed: boolean;
  correct: string;
  answers: any;
  strings = STRINGS;
  constructor(
    private questionsService: QuestionsService,
    private currentValuesService: CurrentValuesService,
  ) {
    this.questionsService.answers$.subscribe((answers: any) => { this.answers = answers; } );
    this.questionsService.correct$.subscribe((correct: string) => { this.correct = correct; } );
    this.currentValuesService.isHalfUsed$.subscribe((isUsed: boolean) => { this.isHalfUsed = isUsed; } );
  }
  handleHalf() {
    if (this.isHalfUsed) {
      return this.strings[1];
    } else {
      this.currentValuesService.updateIsHalfUsed(true);
    }
    document.getElementById('half').style.pointerEvents = 'none';
    document.getElementById('half_2').classList.add('disabled');
    const answs = ['answer_a', 'answer_b', 'answer_c', 'answer_d'];
    let second_answ: string = this.answers[answs.indexOf(this.correct)];
    while (this.answers.indexOf(second_answ) === answs.indexOf(this.correct)) {
      second_answ = this.answers[Math.floor(Math.random() * 4)];
      if (this.answers.indexOf(second_answ) !== answs.indexOf(this.correct)) {
        for (let i = 0; i < 4; i++) {
          if (i !== answs.indexOf(this.correct) && i !== this.answers.indexOf(second_answ)) {
            const element = document.getElementsByClassName(answs[i] + '_p')[0];
            (<HTMLElement>element).style.display = 'none';
            (<HTMLElement>element).parentElement.style.pointerEvents = 'none';
          }
        }
      }
    }
    const halfAnswers = [this.correct, answs[this.answers.indexOf(second_answ)]];
    this.currentValuesService.updateHalfAnswers(halfAnswers);
  }
  ngOnInit() {
    this.correct = this.questionsService.correct;
  }
}

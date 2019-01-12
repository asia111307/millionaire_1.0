import {Component, OnInit} from '@angular/core';
import {STRINGS} from '../strings';
import {PresenterTextService} from '../presenter-text.service';
import {QuestionsService} from '../questions.service';

@Component({
  selector: 'app-helpers',
  templateUrl: './app-helpers.component.html',
  styleUrls: ['./app-helpers.component.css']
})
export class AppHelpersComponent implements OnInit {
  isHalfUsed = false;
  correct: string;
  answers: any;
  strings = STRINGS;
  constructor(
    private questionsService: QuestionsService,
    private presenterTextService: PresenterTextService
  ) {
    this.questionsService.answers$.subscribe((answers: any) => { this.answers = answers; } );
    this.questionsService.correct$.subscribe((correct: string) => { this.correct = correct; } );
  }
  handleHalf() {
    if (this.isHalfUsed) {
      return this.strings[1];
    } else {
      this.isHalfUsed = true;
    }
    // this.current_text = this.strings[2];
    // this.presenterTextService.saveValue(this.current_text);
    const half_hover = document.getElementById('half');
    half_hover.style.pointerEvents = 'none';
    const half = document.getElementById('half_2');
    half.classList.add('disabled');
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
  }
  ngOnInit() {
    this.correct = this.questionsService.correct;
  }
}

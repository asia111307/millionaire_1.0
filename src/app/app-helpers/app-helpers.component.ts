import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {STRINGS} from '../strings';
import {CorrectValueDeliverService} from '../correct-value-deliver.service';
import {PresenterTextService} from '../presenter-text.service';

@Component({
  selector: 'app-helpers',
  templateUrl: './app-helpers.component.html',
  styleUrls: ['./app-helpers.component.css']
})
export class AppHelpersComponent implements OnInit {
  isHalfUsed = false;
  @Input() correct = '';
  @Input() answers = [];
  strings = STRINGS;
  current_text: string;

  constructor(private correctValueDeliverService: CorrectValueDeliverService, private presenterTextService: PresenterTextService) { }

  ngOnInit() {}

  handleHalf() {
    if (this.isHalfUsed) {
      return this.strings[1];
    } else {
      this.isHalfUsed = true;
    }
    //this.current_text = this.strings[2];
    //this.presenterTextService.saveValue(this.current_text);
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
            const element = document.getElementById(answs[i]);
            element.innerHTML = '';
            element.style.pointerEvents = 'none';
          }
        }
      }
    }
  }
}

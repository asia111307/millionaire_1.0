import {Component, OnInit, OnChanges} from '@angular/core';
import {QuestionsService} from '../questions.service';
import {CurrentValuesService} from '../current-values.service';

@Component({
  selector: 'app-answ-quest',
  templateUrl: './app-answ-quest.component.html',
  styleUrls: ['./app-answ-quest.component.css']
})
export class AppAnswQuestComponent implements OnInit, OnChanges {
  prev_stage: any;
  constructor(private questionsService: QuestionsService, private currentValuesService: CurrentValuesService) {
    this.currentValuesService.disableAnswers();
  }
  nextQuestion() {
    setTimeout(() => {
      this.questionsService.choose_box();
      this.currentValuesService.enableAnswers();
      if (this.prev_stage) {
        this.prev_stage.classList.remove('current_stage');
        const next_stage = this.prev_stage.parentElement.previousElementSibling.firstElementChild;
        next_stage.classList.add('current_stage');
        this.prev_stage = next_stage;
        console.log(this.prev_stage);
        // const stageText = <HTMLElement>document.getElementsByClassName('stage_text')[0];
        // stageText.style.color = 'white';
        // prev_stage.parentElement.previousElementSibling.firstElementChild.nextElementSibling.classList.add('text-white');
      } else {
        this.prev_stage = document.querySelectorAll('.stage-1')[0];
        console.log(this.prev_stage);
        this.prev_stage.classList.add('current_stage');
      }
    }, 3000);
  }
  ngOnChanges() {
    this.currentValuesService.disableAnswers();
  }
  ngOnInit() {
    this.currentValuesService.disableAnswers();
  }

}

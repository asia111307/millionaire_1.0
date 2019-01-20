import {Component, OnInit} from '@angular/core';
import {QuestionsService} from '../questions.service';
import {CurrentValuesService} from '../current-values.service';

@Component({
  selector: 'app-answ-quest',
  templateUrl: './app-answ-quest.component.html',
  styleUrls: ['./app-answ-quest.component.css']
})
export class AppAnswQuestComponent implements OnInit {
  prev_stage: any;
  first = true;
  constructor(private questionsService: QuestionsService, private currentValuesService: CurrentValuesService) {
    this.currentValuesService.disableAnswersAndHelpers();
  }
  nextQuestion() {
    setTimeout(() => {
      this.questionsService.choose_box();
      this.currentValuesService.enableAnswersAndHelpers();
      (<HTMLButtonElement>document.getElementsByClassName('endGameButton')[0]).style.pointerEvents = 'auto';
      if (!this.first) {
        this.prev_stage.style.border = '3px solid white';
        this.prev_stage.style.backgroundColor = 'rgba(40, 70, 151, 0.8)';
        const next_stage = this.prev_stage.parentElement.previousElementSibling.firstElementChild;
        // console.log(this.prev_stage);
        // console.log(next_stage);
        next_stage.style.border = '4px solid rgb(222, 178, 47)';
        next_stage.style.backgroundColor = 'rgba(221, 176, 31, 0.6)';

        this.prev_stage = next_stage;
        console.log(this.prev_stage);
        // const stageText = <HTMLElement>document.getElementsByClassName('stage_text')[0];
        // stageText.style.color = 'white';
        // prev_stage.parentElement.previousElementSibling.firstElementChild.nextElementSibling.classList.add('text-white');
      } else {
        this.prev_stage = document.getElementsByClassName('stage-1')[0];
        this.prev_stage.style.border = '4px solid rgb(222, 178, 47)';
        this.prev_stage.style.backgroundColor = 'rgba(221, 176, 31, 0.6)';
        console.log(this.prev_stage);
      }
    }, 2000);
  }
  ngOnInit() {
    this.currentValuesService.disableAnswersAndHelpers();
  }
}

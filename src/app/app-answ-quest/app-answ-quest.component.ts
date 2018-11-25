import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {QuestionsService} from '../questions.service';
import {CorrectValueDeliverService} from '../correct-value-deliver.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-answ-quest',
  templateUrl: './app-answ-quest.component.html',
  styleUrls: ['./app-answ-quest.component.css'],
})
export class AppAnswQuestComponent implements OnInit {
  question = '';
  answers = [];
  @Output() answers2 = new EventEmitter();
  correct = '';
  @Output() corr = new EventEmitter();
  question_box: any;
  constructor(private questionsService: QuestionsService, private correctValueService: CorrectValueDeliverService,) { }

  ngOnInit() {
    this.nextQuestion();
  }
  nextQuestion(){
    this.question_box = this.questionsService.choose_pack();
    this.question = this.question_box[0];
    this.answers = this.question_box[1];
    this.correct = this.question_box[2];
    this.corr.emit(this.correct);
    this.answers2.emit(this.answers);
    this.correctValueService.saveValue(this.correct);
    const stage = <HTMLElement>document.getElementsByClassName('current_stage')[0];
    stage.style.border = '4px solid rgb(222, 178, 47)';
    stage.style.backgroundColor = 'rgba(221, 176, 31, 0.7)';
    const stageText = <HTMLElement>document.getElementsByClassName('stage_text')[0];
    stageText.style.color = 'white';
  }


}

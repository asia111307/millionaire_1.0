import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {QuestionsService} from '../questions.service';


@Component({
  selector: 'app-answ-quest',
  templateUrl: './app-answ-quest.component.html',
  styleUrls: ['./app-answ-quest.component.css']
})
export class AppAnswQuestComponent implements OnInit {
  question: string;
  answers: any;
  @Output() answers2 = new EventEmitter();
  correct: string;
  @Output() corr = new EventEmitter();
  question_box: any;
  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.question_box = this.questionsService.choose_pack();
    this.question = this.question_box[0];
    this.answers = this.question_box[1];
    this.correct = this.question_box[2];
    this.corr.emit(this.correct);
    this.answers2.emit(this.answers);
  }

}

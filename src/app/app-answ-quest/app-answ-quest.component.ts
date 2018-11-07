import {Component, OnInit) from '@angular/core';
import {QuestionsService} from '../questions.service';


@Component({
  selector: 'app-answ-quest',
  templateUrl: './app-answ-quest.component.html',
  styleUrls: ['./app-answ-quest.component.css']
})
export class AppAnswQuestComponent implements OnInit {
  question: string;
  answers: any;
  correct: string;
  question_box: any;
  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.question_box = this.questionsService.choose_pack();
    this.question = this.question_box[0];
    this.answers = this.question_box[1];
    this.correct = this.question_box[2];
  }

}

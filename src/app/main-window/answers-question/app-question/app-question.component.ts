import {Component} from '@angular/core';
import {QuestionsService} from '../../../questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './app-question.component.html',
  styleUrls: ['./app-question.component.css']
})
export class AppQuestionComponent {
  question: string;
  constructor(
    private questionsService: QuestionsService
  ) {
    this.questionsService.question$.subscribe((question: string) => { this.question = question; } );
  }
}

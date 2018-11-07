import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './app-question.component.html',
  styleUrls: ['./app-question.component.css']
})
export class AppQuestionComponent {
  @Input() question: string;
  constructor() {}
}

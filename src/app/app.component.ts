import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Milionerzy dla kognitywistów';
  @Input() username = '';
  @Input() answers = [];
  @Input() correct = '';
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['']);
  }

  handleName(name) {
    this.username = name;
  }
  handleCorrect(corr) {
    this.correct = corr;
  }
  handleAnswers(answ) {
    this.answers = answ;
  }
}


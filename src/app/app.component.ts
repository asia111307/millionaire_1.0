import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Milionerzy dla kognitywistów';
  @Input() username: string;
  handleName(name) {
    this.username = name;
  }
  constructor() {}
  ngOnInit() {}
}


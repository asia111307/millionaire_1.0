import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './app-top-nav.component.html',
  styleUrls: ['./app-top-nav.component.css'],
})
export class AppTopNavComponent implements OnInit {
  @Input() user_name = '';
  @Input() answers = [];
  @Input() correct = '';
  constructor() {}

  ngOnInit() {}
}

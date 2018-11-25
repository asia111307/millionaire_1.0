import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-userpanel',
  templateUrl: './app-userpanel.component.html',
  styleUrls: ['./app-userpanel.component.css']
})
export class AppUserpanelComponent implements OnInit {
  @Input() name = '';

  constructor() {}

  ngOnInit() {
    this.name = localStorage.getItem('user_name');
    localStorage.removeItem('user_name');
  }
}




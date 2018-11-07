import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './app-start-menu.component.html',
  styleUrls: ['./app-start-menu.component.css']
})
export class AppStartMenuComponent implements OnInit {
  @Output() user_name = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  getName(name) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    this.user_name.emit(name);
    localStorage.setItem('user_name', name);
    localStorage.getItem('user_name');
  }

}

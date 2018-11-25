import {Component, Input, OnInit} from '@angular/core';
import {AppRoutingModule} from '../app-routing/app-routing.module';

@Component({
  selector: 'app-app-main-window',
  templateUrl: './app-main-window.component.html',
  styleUrls: ['./app-main-window.component.css']
})
export class AppMainWindowComponent implements OnInit {
  @Input() outcomes;
  @Input() correct;
  constructor() { }

  ngOnInit() {
  }

}

import {Component} from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './app-top-nav.component.html',
  styleUrls: ['./app-top-nav.component.css'],
})
export class AppTopNavComponent {

  constructor() {}
  endGame() {
    window.location.reload();
  }
}

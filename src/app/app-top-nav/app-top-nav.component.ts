import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CurrentValuesService} from '../current-values.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './app-top-nav.component.html',
  styleUrls: ['./app-top-nav.component.css'],
})
export class AppTopNavComponent {

  constructor(
      private router: Router,
      private currentValuesService: CurrentValuesService
  ) {}
  endGame() {
    this.currentValuesService.disableAnswersAndHelpers();
    this.router.navigate(['/resignation']);
  }
}

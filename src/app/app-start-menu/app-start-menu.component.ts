import {Component, OnInit} from '@angular/core';
import {STRINGS} from '../strings';
import {CurrentValuesService} from '../current-values.service';
import {Router} from '@angular/router';
import {AppAnswQuestComponent} from '../app-answ-quest/app-answ-quest.component';

@Component({
  providers: [AppAnswQuestComponent],
  selector: 'app-start-menu',
  templateUrl: './app-start-menu.component.html',
  styleUrls: ['./app-start-menu.component.css']
})
export class AppStartMenuComponent implements OnInit {
  current_text: string;
  strings =  STRINGS;
  constructor(
    private currentValuesService: CurrentValuesService,
    private router: Router,
    private answQuestComponent: AppAnswQuestComponent
  ) {}
  startGame(name) {
    if (name && name.length >= 3) {
      this.currentValuesService.showGameElementsAfterStart();
      this.currentValuesService.saveName(name);
      this.router.navigate(['/main']);
      setTimeout(() => { this.answQuestComponent.nextQuestion(); }, 1000);
    }
  }
  seeInstructions() {
    this.router.navigate(['/instructions']);
  }
  ngOnInit() {
    // document.getElementsByTagName('username_input')[0].addEventListener('keyup', function(event: KeyboardEvent) {
    //   event.preventDefault();
    //   if (event.key === 'Enter') {
    //     document.getElementById('submit').click();
    //   }
    // });
    this.currentValuesService.hideGameElementsOnStart();
    this.current_text = this.strings[0];
  }
}

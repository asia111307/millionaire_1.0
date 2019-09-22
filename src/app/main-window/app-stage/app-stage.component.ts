import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CurrentValuesService} from '../../current-values.service';

@Component({
  selector: 'app-stage',
  templateUrl: './app-stage.component.html',
  styleUrls: ['./app-stage.component.css']
})
export class AppStageComponent {
  currentStageNumber: number;
  currentStageValue = '0';
  constructor(
      private router: Router,
      private currentValuesService: CurrentValuesService,
  ) {
    this.currentValuesService.currentStageValue$.subscribe((value: number) => {
      this.currentStageNumber = value;
      this.currentStageValue = this.currentValuesService.mapPrizes(value);
  }); }

  toggleStageOpen() {
    const stage = document.getElementsByClassName('stage')[0];
    const stage_button_label = document.getElementsByClassName('stage-button-label')[0];
    if (stage.classList.contains('open')) {
      stage.classList.remove('open');
      (<HTMLElement>stage).style.display = 'none';
      stage_button_label.innerHTML = 'Rozwiń';
    } else {
      stage.classList.add('open');
      (<HTMLElement>stage).style.display = 'block';
      stage_button_label.innerHTML = 'Schowaj';
    }
  }
}

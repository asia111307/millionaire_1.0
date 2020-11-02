import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CurrentValuesService} from '../../current-values.service';

@Component({
  selector: 'app-summary',
  templateUrl: './app-summary.component.html',
  styleUrls: ['./app-summary.component.css']
})
export class AppSummaryComponent implements OnInit {
  wonPrize: number;
  wonPrizeValue = '0';
  currentGuaranteed: number;
  currentGuaranteedValue = '0';
  gameEndBy: string;
  winning: string;
  constructor(
      private router: Router,
      private currentValuesService: CurrentValuesService,
  ) {
    this.currentValuesService.currentStageValueReached$.subscribe((value: number) => {
      this.currentGuaranteed = value;
      this.currentGuaranteedValue = this.currentValuesService.mapPrizes(value); });
    this.currentValuesService.currentPrize$.subscribe((value: number) => {
      this.wonPrize = value;
      this.wonPrizeValue = this.currentValuesService.mapPrizes(value); } );
  }
  backToHome() {
    window.location.reload();
  }
  ngOnInit() {
    this.gameEndBy = this.currentValuesService.endGameBy;
    if (this.gameEndBy === 'user') {
      this.winning = this.wonPrizeValue;
    } else {
      this.winning = this.currentGuaranteedValue;
    }
    (<HTMLElement>document.getElementsByClassName('mainmenu')[0]).style.display = 'block';
  }
}

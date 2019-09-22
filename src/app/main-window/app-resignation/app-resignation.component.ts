import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CurrentValuesService} from '../../current-values.service';

@Component({
  selector: 'app-resignation',
  templateUrl: './app-resignation.component.html',
  styleUrls: ['./app-resignation.component.css']
})
export class AppResignationComponent implements OnInit {
  wonPrize: number;
  wonPrizeValue = '0';
  constructor(
      private router: Router,
      private currentValuesService: CurrentValuesService,
  ) {
    this.currentValuesService.currentPrize$.subscribe((value: number) => {
      this.wonPrize = value;
      this.wonPrizeValue = this.currentValuesService.mapPrizes(value);
  }); }
  resumeGame() {
    this.currentValuesService.enableAnswersAndHelpers();
    this.router.navigate(['/main']);
    (<HTMLElement>document.getElementsByClassName('mainmenu')[0]).style.display = 'none';
  }
  endGame() {
    this.currentValuesService.updateEndGame('user');
    this.router.navigate(['/summary']);
  }
  ngOnInit() {
    (<HTMLElement>document.getElementsByClassName('mainmenu')[0]).style.display = 'block';
  }
}

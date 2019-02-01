import {Component, OnInit} from '@angular/core';
import {STRINGS} from '../strings';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-instructions',
  templateUrl: './app-instructions.component.html',
  styleUrls: ['./app-instructions.component.css']
})
export class AppInstructionsComponent implements OnInit {
  slidesTexts = [STRINGS[23], STRINGS[24], STRINGS[25], STRINGS[26], STRINGS[27], STRINGS[28]];
  currentSlide: number;
  currentSlideText: string;
  constructor(
      private router: Router
  ) {}
  next() {
    this.currentSlide++;
    console.log(this.currentSlide);
    console.log(this.slidesTexts[this.currentSlide]);
    this.currentSlideText = this.slidesTexts[this.currentSlide];
  }
  prev() {
    this.currentSlide--;
    console.log(this.currentSlide);
    console.log(this.slidesTexts[this.currentSlide]);
    this.currentSlideText = this.slidesTexts[this.currentSlide];
  }
  startGame() {
    this.router.navigate(['/welcome']);
  }
  ngOnInit() {
    this.currentSlide = 0;
    this.currentSlideText = this.slidesTexts[this.currentSlide];
  }

}

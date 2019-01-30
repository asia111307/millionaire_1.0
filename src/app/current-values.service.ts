import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentValuesService {
  values = [0, 500, 1000, 2000, 5000, 10000, 20000, 40000, 75000, 125000, 250000, 500000, 1000000];
  valuesReached = [2000, 40000, 1000000];
  answer_elements = document.getElementsByClassName('answer_p');
  helper_elements = document.getElementsByClassName('helper_e');
  name$: Observable<string>;
  isAnswerCorrect: boolean;
  isHalfUsed$: Observable<boolean>;
  halfAnswers = [];
  currentStage$: Observable<number>;
  currentStage = 0;
  currentStageValue$: Observable<number>;
  currentStageValue = 0;
  currentStageValueReached$: Observable<number>;
  currentStageValueReached = 0;
  endGameBy: string;
  currentPrize$: Observable<number>;
  currentPrizeIndex = 0;
  private nameSubject: Subject<string>;
  private currentStageSubject: BehaviorSubject<number>;
  private currentStageValueSubject: BehaviorSubject<number>;
  private currentStageValueReachedSubject: BehaviorSubject<number>;
  private isHalfUsedSubject: BehaviorSubject<boolean>;
  private currentPrizeSubject: BehaviorSubject<number>;
  constructor() {
    this.nameSubject = new Subject<string>();
    this.currentStageSubject = new BehaviorSubject<number>(0);
    this.currentStageValueSubject = new BehaviorSubject<number>(0);
    this.currentStageValueReachedSubject = new BehaviorSubject<number>(0);
    this.isHalfUsedSubject = new BehaviorSubject<boolean>(false);
    this.currentPrizeSubject = new BehaviorSubject<number>(0);
    this.name$ = this.nameSubject.asObservable();
    this.currentStage$ = this.currentStageSubject.asObservable();
    this.currentStageValue$ = this.currentStageValueSubject.asObservable();
    this.currentStageValueReached$ = this.currentStageValueReachedSubject.asObservable();
    this.isHalfUsed$ = this.isHalfUsedSubject.asObservable();
    this.currentPrize$ = this.currentPrizeSubject.asObservable();
  }
  saveName(name) {
    this.nameSubject.next(name);
  }
  updateIsAnswerCorrect(isCorrect) {
    this.isAnswerCorrect = isCorrect;
  }
  readIsAnswerCorrect() {
    return this.isAnswerCorrect;
  }
  disableAnswersAndHelpers() {
    for (let i = 0; i < this.answer_elements.length; i++) {
      (<HTMLElement>this.answer_elements[i]).parentElement.style.pointerEvents = 'none';
    }
    for (let j = 0; j < this.helper_elements.length; j++) {
      (<HTMLElement>this.helper_elements[j]).style.pointerEvents = 'none';
    }
  }
  enableAnswersAndHelpers() {
    for (let i = 0; i < this.answer_elements.length; i++) {
      (<HTMLElement>this.answer_elements[i]).parentElement.style.pointerEvents = 'auto';
    }
    for (let j = 0; j < this.helper_elements.length; j++) {
      if (!(<HTMLElement>this.helper_elements[j]).firstElementChild.classList.contains('disabled')) {
        (<HTMLElement>this.helper_elements[j]).style.pointerEvents = 'auto';
      }
    }
  }
  updateCurrentPrize() {
    this.currentPrizeIndex++;
    this.currentPrizeSubject.next(this.values[this.currentPrizeIndex]);
  }
  updateCurrentStage() {
    this.currentStage = this.currentStage++;
    this.currentStageSubject.next(this.currentStage);
  }
  updateCurrentStageValue() {
    this.updateCurrentStage();
    this.currentStageValue = this.values[this.currentStage];
    this.currentStageValueSubject.next(this.currentStageValue);
    if (this.valuesReached.includes(this.currentStageValue)) {
      this.currentStageValueReached = this.currentStageValue;
      this.currentStageValueReachedSubject.next(this.currentStageValueReached);
    }
  }
  updateIsHalfUsed(value: boolean) {
    this.isHalfUsedSubject.next(value);
  }
  updateHalfAnswers(answers) {
    this.halfAnswers = answers;
  }
  mapAnswers(value) {
    if (value === 'answer_a') {
      return 'A';
    }
    if (value === 'answer_b') {
      return 'B';
    }
    if (value === 'answer_c') {
      return 'C';
    }
    if (value === 'answer_d') {
      return 'D';
    }
  }
  hideGameElementsOnStart() {
    (<HTMLElement>document.querySelector('app-top-nav')).style.display = 'none';
    (<HTMLElement>document.querySelector('app-answ-quest')).style.display = 'none';
    (<HTMLElement>document.querySelector('app-stage')).style.display = 'none';
    (<HTMLElement>document.querySelector('.presenter')).style.display = 'none';
  }
  showGameElementsAfterStart() {
    (<HTMLElement>document.querySelector('app-top-nav')).style.display = 'block';
    (<HTMLElement>document.querySelector('app-answ-quest')).style.display = 'block';
    (<HTMLElement>document.querySelector('app-stage')).style.display = 'block';
    (<HTMLElement>document.querySelector('.presenter')).style.display = 'flex';
  }
  updateStage() {
    this.currentStage += 1;
    const current = <HTMLElement>document.getElementsByClassName(`stage-${this.currentStage}`)[0];
    current.style.border = '4px solid rgb(222, 178, 47)';
    current.style.backgroundColor = 'rgba(221, 176, 31, 0.5)';
    (<HTMLElement>current.firstElementChild).style.color = 'white';
    for (let i = 1; i < this.currentStage; i++) {
      const stage = <HTMLElement>document.getElementsByClassName(`stage-${i}`)[0];
      if (stage.classList.contains('guaranteed')) {
        const guaranteed = document.getElementsByClassName('guaranteed');
        for (let k = 0; k < guaranteed.length; k++) {
          if (guaranteed[k] !== current) {
            (<HTMLElement>guaranteed[k]).style.border = '3px solid white';
            (<HTMLElement>guaranteed[k]).style.backgroundColor = 'rgba(40, 70, 151, 0.8)';
          }
        }
        stage.style.border = '4px solid rgba(115, 192, 35, 0.8)';
        stage.style.backgroundColor = 'rgba(115, 192, 35, 0.7)';
      } else {
        stage.style.border = '3px solid white';
        stage.style.backgroundColor = 'rgba(40, 70, 151, 0.8)';
      }
    }
  }
  updateEndGame(value) {
    this.endGameBy = value;
  }
  mapPrizes(value) {
    if (value === 1000000) {
      return '1 000 000';
    } else if (value === 500) {
      return '500';
    } else if (value === 0) {
      return '0';
    }else if (value !== 0) {
      return `${value / 1000} 000`;
    }
  }
}

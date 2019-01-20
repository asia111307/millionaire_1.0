import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentValuesService {
  values = [500, 1000, 2000, 5000, 10000, 20000, 40000, 75000, 125000, 250000, 500000, 1000000];
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
  private nameSubject: Subject<string>;
  private currentStageSubject: BehaviorSubject<number>;
  private currentStageValueSubject: BehaviorSubject<number>;
  private currentStageValueReachedSubject: BehaviorSubject<number>;
  private isHalfUsedSubject: BehaviorSubject<boolean>;
  constructor() {
    this.nameSubject = new Subject<string>();
    this.currentStageSubject = new BehaviorSubject<number>(0);
    this.currentStageValueSubject = new BehaviorSubject<number>(0);
    this.currentStageValueReachedSubject = new BehaviorSubject<number>(0);
    this.isHalfUsedSubject = new BehaviorSubject<boolean>(false);
    this.name$ = this.nameSubject.asObservable();
    this.currentStage$ = this.currentStageSubject.asObservable();
    this.currentStageValue$ = this.currentStageValueSubject.asObservable();
    this.currentStageValueReached$ = this.currentStageValueReachedSubject.asObservable();
    this.isHalfUsed$ = this.isHalfUsedSubject.asObservable();
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
  updateCurrentStage() {
    this.currentStage = this.currentStage++;
    this.currentStageSubject.next(this.currentStage);
  }
  updateCurrentStageValue() {
    this.currentStageValue = this.values[this.values.indexOf(this.currentStage)];
    this.currentStageValueSubject.next(this.currentStageValue);
  }
  updateCurrentStageValueReached(value) {
    this.currentStageValueReachedSubject.next(value);
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
}

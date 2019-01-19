import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentValuesService {
  values = [500, 1000, 2000, 5000, 10000, 20000, 40000, 75000, 125000, 250000, 500000, 1000000];
  valuesReached = [2000, 40000, 1000000];
  answer_elements = document.getElementsByClassName('answer_p');
  name$: Observable<string>;
  isAnswerCorrect: boolean;
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
  constructor() {
    this.nameSubject = new Subject<string>();
    this.currentStageSubject = new BehaviorSubject<number>(0);
    this.currentStageValueSubject = new BehaviorSubject<number>(0);
    this.currentStageValueReachedSubject = new BehaviorSubject<number>(0);
    this.name$ = this.nameSubject.asObservable();
    this.currentStage$ = this.currentStageSubject.asObservable();
    this.currentStageValue$ = this.currentStageValueSubject.asObservable();
    this.currentStageValueReached$ = this.currentStageValueReachedSubject.asObservable();
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
  disableAnswers() {
    for (let i = 0; i < this.answer_elements.length; i++) {
      (<HTMLElement>this.answer_elements[i]).parentElement.style.pointerEvents = 'none';
    }
  }
  enableAnswers() {
    for (let i = 0; i < this.answer_elements.length; i++) {
      (<HTMLElement>this.answer_elements[i]).parentElement.style.pointerEvents = 'auto';
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
}

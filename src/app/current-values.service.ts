import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentValuesService {
  answer_elements = document.getElementsByClassName('answer_p');
  name$: Observable<string>;
  isAnswerCorrect: boolean;
  currentStage$: Observable<number>;
  currentStageValue$: Observable<number>;
  currentStageValueReached$: Observable<number>;
  private nameSubject: Subject<string>;
  private currentStageSubject: Subject<number>;
  private currentStageValueSubject: Subject<number>;
  private currentStageValueReachedSubject: Subject<number>;
  constructor() {
    this.nameSubject = new Subject<string>();
    this.currentStageSubject = new Subject<number>();
    this.currentStageValueSubject = new Subject<number>();
    this.currentStageValueReachedSubject = new Subject<number>();
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
}

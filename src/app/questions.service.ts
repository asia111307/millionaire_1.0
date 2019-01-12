import {Injectable} from '@angular/core';
import {QUESTIONS} from './questions';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  used_questions = [];
  used_questions$: Observable<any>;
  questBox$: Observable<any>;
  question$: Observable<string>;
  answers$: Observable<any>;
  correct$: Observable<string>;
  correct: string;
  private used_questionsSubject: Subject<any>;
  private questBoxSubject: Subject<any>;
  private questionSubject: Subject<string>;
  private answersSubject: Subject<any>;
  private correctSubject: Subject<string>;
  constructor() {
    this.used_questionsSubject = new Subject<any>();
    this.questBoxSubject = new Subject<any>();
    this.questionSubject = new Subject<string>();
    this.answersSubject = new Subject<any>();
    this.correctSubject = new Subject<string>();
    this.used_questions$ = this.used_questionsSubject.asObservable();
    this.questBox$ = this.questBoxSubject.asObservable();
    this.question$ = this.questionSubject.asObservable();
    this.answers$ = this.answersSubject.asObservable();
    this.correct$ = this.correctSubject.asObservable();
  }
  open_quest_pack() {
    try {
      return QUESTIONS;
    } catch (error) {
      console.error(error);
    }
  }
  choose_question_box(quest_pack) {
    const quest_box = quest_pack[Math.floor(Math.random() * quest_pack.length)];
    if (this.used_questions.includes(quest_box)) {
      console.log('already used');
      this.choose_question_box(this.open_quest_pack());
    } else {
      this.used_questionsSubject.next(quest_box);
      this.used_questions.push(quest_box);
      QUESTIONS.splice(QUESTIONS.indexOf(quest_pack), 1);
      this.questBoxSubject.next(quest_box);
      return quest_box;
    }
  }
  set_question(quest_box) {
    this.questionSubject.next(quest_box[0]);
    return quest_box[0];
  }
  set_answers(quest_box) {
    this.answersSubject.next(quest_box[1]);
    return quest_box[1];
  }
  set_correct(quest_box) {
    if (quest_box[2] === 'a') {
      this.correct = 'answer_a';
      this.correctSubject.next('answer_a');
    }
    if (quest_box[2] === 'b') {
      this.correct = 'answer_b';
      this.correctSubject.next('answer_b');
    }
    if (quest_box[2] === 'c') {
      this.correct = 'answer_c';
      this.correctSubject.next('answer_c');
    }
    if (quest_box[2] === 'd') {
      this.correct = 'answer_d';
      this.correctSubject.next('answer_d');
    }
    return this.correct;
  }
  choose_box() {
    const question_pack = this.open_quest_pack();
    const quest_box = this.choose_question_box(question_pack);
    const question = this.set_question(quest_box);
    const answers = this.set_answers(quest_box);
    const correct = this.set_correct(quest_box);
  }
  clearValues() {
    this.questBoxSubject.next('');
    this.questionSubject.next('');
    this.answersSubject.next('');
    this.correctSubject.next('');
  }
}




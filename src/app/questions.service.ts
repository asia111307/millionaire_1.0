import { Injectable} from '@angular/core';
import {QUESTIONS} from './questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  used_questions = [];
  constructor() { }

  open_quest_pack() {
    try {
      const quest_pack = QUESTIONS;
      return quest_pack;
    } catch (error) {
      console.error(error);
      return'\nCoś poszło nie tak... Niestety musimy zakończyć program.';
    }
  }

  choose_question_box(quest_pack) {
    const quest_box = quest_pack[Math.floor(Math.random() * quest_pack.length)];
    if (this.used_questions.includes(quest_box)) {
    } else {
      this.used_questions.push(quest_box);
      return quest_box;
    }
  }
  set_question(quest_box) {
    return quest_box[0];
  }
  set_answers(quest_box) {
    return quest_box[1];
  }
  set_correct(quest_box) {
    if (quest_box[2] === 'a') {
      return 'answer_a';
    }
    if (quest_box[2] === 'b') {
      return 'answer_b';
    }
    if (quest_box[2] === 'c') {
      return 'answer_c';
    }
    if (quest_box[2] === 'd') {
      return 'answer_d';
    }
  }
  choose_pack() {
    const question_pack = this.open_quest_pack();
    const quest_box = this.choose_question_box(question_pack);
    const question = this.set_question(quest_box);
    const answers = this.set_answers(quest_box);
    const correct = this.set_correct(quest_box);
    return [question, answers, correct];
  }
}




import { Injectable} from '@angular/core';
import {QUESTIONS} from './questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor() { }

  static open_quest_pack() {
    try {
      const quest_pack = QUESTIONS;
      return quest_pack;
    } catch (error) {
      console.error(error);
      return'\nCoś poszło nie tak... Niestety musimy zakończyć program.';
    }
  }

  static choose_question_box(quest_pack) {
    const used_questions = [];
    const quest_box = quest_pack[Math.floor(Math.random() * quest_pack.length)];
    if (used_questions.includes(quest_box)) {
    } else {
      used_questions.push(quest_box);
      return quest_box;
    }
  }
  static set_question(quest_box) {
    return quest_box[0];
  }
  static set_answers(quest_box) {
    return quest_box[1];
  }
  static set_correct(quest_box) {
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
    const question_pack = QuestionsService.open_quest_pack();
    const quest_box = QuestionsService.choose_question_box(question_pack);
    const question = QuestionsService.set_question(quest_box);
    const answers = QuestionsService.set_answers(quest_box);
    const correct = QuestionsService.set_correct(quest_box);
    return [question, answers, correct];
  }
}




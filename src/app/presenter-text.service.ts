import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresenterTextService {
  current_value = '';
  constructor() { }
  saveValue(value) {
    this.current_value = value;
  }
  readValue() {
    return this.current_value;
  }
}

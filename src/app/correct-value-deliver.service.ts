import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorrectValueDeliverService {
  current_value: any;
  constructor() { }
  saveValue(value) {
    this.current_value = value;
  }
  readValue() {
    return this.current_value;
  }
}

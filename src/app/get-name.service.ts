import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetNameService {
  static getName() {
    return document.getElementsByClassName('username_input')[0].innerHTML;
  }
}

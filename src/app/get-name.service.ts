import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetNameService {
  getName() {
    return document.getElementsByClassName('username_input')[0].innerHTML;
  }
}

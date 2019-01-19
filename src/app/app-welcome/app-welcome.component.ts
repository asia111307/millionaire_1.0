import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-welcome',
  templateUrl: './app-welcome.component.html',
  styleUrls: ['./app-welcome.component.css']
})
export class AppWelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}

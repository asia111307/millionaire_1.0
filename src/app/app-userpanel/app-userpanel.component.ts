import {Component} from '@angular/core';
import {CurrentValuesService} from '../current-values.service';
import {CapitalizePipe} from '../capitalize.pipe';

@Component({
  providers: [CapitalizePipe],
  selector: 'app-userpanel',
  templateUrl: './app-userpanel.component.html',
  styleUrls: ['./app-userpanel.component.css']
})
export class AppUserpanelComponent {
  name = '';
  constructor(
    private currentValuesService: CurrentValuesService,
    private capitalize: CapitalizePipe
  ) {
    this.currentValuesService.name$.subscribe((name: string) => { this.name = name; } );
  }

}




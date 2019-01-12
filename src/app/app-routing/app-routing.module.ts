import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppStartMenuComponent} from '../app-start-menu/app-start-menu.component';
import {AppPhoneComponent} from '../app-phone/app-phone.component';
import {AppPeopleComponent} from '../app-people/app-people.component';
import {AppDecisionComponent} from '../app-decision/app-decision.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: AppStartMenuComponent },
  { path: 'phone', component: AppPhoneComponent },
  { path: 'people', component: AppPeopleComponent },
  { path: 'decision', component: AppDecisionComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

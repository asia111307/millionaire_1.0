import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppStartMenuComponent} from '../app-start-menu/app-start-menu.component';
import {AppPhoneComponent} from '../app-phone/app-phone.component';
import {AppPeopleComponent} from '../app-people/app-people.component';
import {AppDecisionComponent} from '../app-decision/app-decision.component';
import {AppWelcomeComponent} from '../app-welcome/app-welcome.component';
import {AppMainWindowComponent} from '../app-main-window/app-main-window.component';
import {AppResignationComponent} from '../app-resignation/app-resignation.component';
import {AppSummaryComponent} from '../app-summary/app-summary.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: AppWelcomeComponent},
  {path: 'start', component: AppStartMenuComponent},
  {path: 'main', component: AppMainWindowComponent},
  {path: 'phone', component: AppPhoneComponent},
  {path: 'people', component: AppPeopleComponent},
  {path: 'decision', component: AppDecisionComponent},
  {path: 'resignation', component: AppResignationComponent},
  {path: 'summary', component: AppSummaryComponent},
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppStartMenuComponent} from '../../start/app-start-menu/app-start-menu.component';
import {AppPhoneComponent} from '../../main-window/app-phone/app-phone.component';
import {AppPeopleComponent} from '../../main-window/app-people/app-people.component';
import {AppDecisionComponent} from '../../main-window/app-decision/app-decision.component';
import {AppMainWindowComponent} from '../../main-window/app-main-window/app-main-window.component';
import {AppResignationComponent} from '../../main-window/app-resignation/app-resignation.component';
import {AppSummaryComponent} from '../../main-window/app-summary/app-summary.component';
import {AppInstructionsComponent} from '../../start/app-instructions/app-instructions.component';

const routes: Routes = [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: AppStartMenuComponent},
  {path: 'main', component: AppMainWindowComponent},
  {path: 'phone', component: AppPhoneComponent},
  {path: 'people', component: AppPeopleComponent},
  {path: 'decision', component: AppDecisionComponent},
  {path: 'resignation', component: AppResignationComponent},
  {path: 'summary', component: AppSummaryComponent},
  {path: 'instructions', component: AppInstructionsComponent},

];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {AppQuestionComponent} from './main-window/answers-question/app-question/app-question.component';
import {AppAnswersComponent} from './main-window/answers-question/app-answers/app-answers.component';
import {AppHelpersComponent} from './top-nav/app-helpers/app-helpers.component';
import {AppStageComponent} from './main-window/app-stage/app-stage.component';
import {AppTopNavComponent} from './top-nav/app-top-nav/app-top-nav.component';
import {AppUserpanelComponent} from './top-nav/app-userpanel/app-userpanel.component';
import {AppStartMenuComponent} from './start/app-start-menu/app-start-menu.component';
import {AppFooterComponent} from './footer/app-footer/app-footer.component';
import {QuestionsService} from './questions.service';
import {AppAnswQuestComponent} from './main-window/answers-question/app-answ-quest/app-answ-quest.component';
import {CapitalizePipe} from './capitalize.pipe';
import {AppPeopleComponent} from './main-window/app-people/app-people.component';
import {AppPhoneComponent} from './main-window/app-phone/app-phone.component';
import {AppMainWindowComponent} from './main-window/app-main-window/app-main-window.component';
import {AppRoutingModule} from './routes/app-routing/app-routing.module';
import {AppDecisionComponent} from './main-window/app-decision/app-decision.component';
import {CurrentValuesService} from './current-values.service';
import {GetNameService} from './get-name.service';
import {AppResignationComponent} from './main-window/app-resignation/app-resignation.component';
import {AppSummaryComponent} from './main-window/app-summary/app-summary.component';
import {AppInstructionsComponent} from './start/app-instructions/app-instructions.component';

const components = [
  AppComponent,
  AppQuestionComponent,
  AppAnswersComponent,
  AppHelpersComponent,
  AppStageComponent,
  AppTopNavComponent,
  AppUserpanelComponent,
  AppStartMenuComponent,
  AppFooterComponent,
  AppAnswQuestComponent,
  AppPeopleComponent,
  AppPhoneComponent,
  AppMainWindowComponent,
  AppDecisionComponent,
  AppResignationComponent,
  AppSummaryComponent,
  AppInstructionsComponent
];

@NgModule({
  declarations: [components, CapitalizePipe],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [QuestionsService, CurrentValuesService, GetNameService],
  bootstrap: [AppComponent]
})
export class AppModule {}

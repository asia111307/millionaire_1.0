import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppQuestionComponent } from './app-question/app-question.component';
import { AppAnswersComponent } from './app-answers/app-answers.component';
import { AppHelpersComponent } from './app-helpers/app-helpers.component';
import { AppStageComponent } from './app-stage/app-stage.component';
import { AppTopNavComponent } from './app-top-nav/app-top-nav.component';
import { AppUserpanelComponent } from './app-userpanel/app-userpanel.component';
import { AppTextboxComponent } from './app-textbox/app-textbox.component';
import { AppStartMenuComponent } from './app-start-menu/app-start-menu.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { QuestionsService } from './questions.service';
import { AppAnswQuestComponent } from './app-answ-quest/app-answ-quest.component';
import { CapitalizePipe } from './capitalize.pipe';
import { AppPeopleComponent } from './app-people/app-people.component';
import { AppPhoneComponent } from './app-phone/app-phone.component';
import { AppMainWindowComponent } from './app-main-window/app-main-window.component';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { AppDecisionComponent } from './app-decision/app-decision.component';
import { CorrectValueDeliverService } from './correct-value-deliver.service';


const components = [
  AppComponent,
  AppQuestionComponent,
  AppAnswersComponent,
  AppHelpersComponent,
  AppStageComponent,
  AppTopNavComponent,
  AppUserpanelComponent,
  AppTextboxComponent,
  AppStartMenuComponent,
  AppFooterComponent,
  AppAnswQuestComponent,
  AppPeopleComponent,
  AppPhoneComponent,
  AppMainWindowComponent,
  AppDecisionComponent
];

@NgModule({
  declarations: [components, CapitalizePipe],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [QuestionsService, CorrectValueDeliverService],
  bootstrap: [AppComponent]
})
export class AppModule { }

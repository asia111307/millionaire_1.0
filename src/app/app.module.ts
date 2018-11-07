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
  AppAnswQuestComponent
];

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

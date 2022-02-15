import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConfigurationComponent } from './components/configuration/configuration.component';
import {AppComponent} from "./components/app/app.component";
import {LanguagePipe} from "./pipes/language.pipe";
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { HistoryComponent } from './components/history/history.component';
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { EditUserComponent } from './components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    SentimentAnalysisComponent,
    LanguageDetectionComponent,
    HistoryComponent,
    LanguagePipe,
    LoginComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent
  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NgMultiSelectDropDownModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfigurationComponent} from "./components/configuration/configuration.component";
import {AuthGuard} from "./auth.guard";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {HistoryComponent} from "./components/history/history.component";
import { LoginComponent } from './components/login/login.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  {
    path: "",
    component: ConfigurationComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "add-user",
    component: AddUserComponent
  },
  {
    path: "edit-user",
    component: EditUserComponent
  },
  {
    path: "configuration",
    component: ConfigurationComponent
  },
  {
    path: "entity-extraction",
    component: EntityExtractionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "language-detection",
    component: LanguageDetectionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "sentiment-analysis",
    component: SentimentAnalysisComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "text-similarity",
    component: TextSimilarityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

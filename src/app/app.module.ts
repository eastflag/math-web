import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserComponent} from "./user/user.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatToolbarModule
} from "@angular/material";
import {HomeComponent} from "./user/home/home.component";
import { QuestionListComponent } from './user/question/question-list.component';
import { ResultListComponent } from './user/result/result-list.component';
import { HighlightDirective } from './highlight.directive';
import { MydatePipe } from './mydate.pipe';
import { UserService } from './user.service';
import {HttpClientModule} from "@angular/common/http";
import { ResultViewComponent } from './user/result/view/result-view.component';
import {ChartsModule} from "ng2-charts";
import { AnswerViewComponent } from './user/result/view/answer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    QuestionListComponent,
    ResultListComponent,
    HighlightDirective,
    MydatePipe,
    ResultViewComponent,
    AnswerViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ChartsModule,
  ],
  providers: [
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

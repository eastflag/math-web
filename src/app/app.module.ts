import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserComponent} from "./user/user.component";
import {AuthGuardService} from "./auth/auth-guard.service";
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatRadioModule, MatToolbarModule
} from "@angular/material";
import {HomeComponent} from "./user/home/home.component";
import { ResultListComponent } from './user/result/result-list.component';
import { HighlightDirective } from './highlight.directive';
import { MydatePipe } from './mydate.pipe';
import { UserService } from './user.service';
import {HttpClientModule} from "@angular/common/http";
import { ResultViewComponent } from './user/result/view/result-view.component';
import {ChartsModule} from "ng2-charts";
import { AnswerViewComponent } from './user/result/view/answer-view.component';
import {ExamListComponent} from "./user/exam/exam-list.component";
import {ExamViewComponent} from "./user/exam/view/exam-view.component";
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    ExamListComponent,
    ResultListComponent,
    HighlightDirective,
    MydatePipe,
    ResultViewComponent,
    AnswerViewComponent,
    ExamViewComponent,
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
    MatExpansionModule,
    MatListModule,
    MatRadioModule,
    FlexLayoutModule,
  ],
  providers: [
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

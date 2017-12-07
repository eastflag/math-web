import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user/user.component";
import {MainComponent} from "./user/main/main.component";

const appRoutes: Routes = [
  {path: '', component: UserComponent, children: [
    {path: '', component: MainComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'register', component: RegisterComponent},
    // {path: 'year', component: YearComponent},
    // {path: 'xi', component: XiComponent},
    // {path: 'semo', component: SemoComponent},
    // {path: 'grade/:category_id', component: GradeComponent},
    // {path: 'question', component: YearQuestionComponent},
    // {path: 'answer/:question_id', component: YearAnswerComponent, children: [
    //   {path: ':answer_id', component: DetailComponent},
    // ]},
    // {path: 'board', component: TabComponent, children: [
    //   {path: ':board_type', component: BoardComponent, children: [
    //     {path: 'write', component: WriteComponent, canActivate: [AuthGuardService]},
    //     {path: 'view/:board_id', component: ViewComponent},
    //     {path: 'modify/:board_id', component: ModifyComponent},
    //   ]},
    // ]},
    // {path: 'favorite', component: FavoriteComponent, canActivate: [AuthGuardService]},
    // {path: 'recent', component: RecentComponent},
  ]},
  // {path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule', canLoad: [AuthGuardService]},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }

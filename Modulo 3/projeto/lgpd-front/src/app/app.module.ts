import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { CourseListComponent } from './pages/course/course-list/course-list.component';
import { CourseFormComponent } from './pages/course/course-form/course-form.component';
import { EvaluationListComponent } from './pages/evaluation/evaluation-list/evaluation-list.component';
import { EvaluationFormComponent } from './pages/evaluation/evaluation-form/evaluation-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

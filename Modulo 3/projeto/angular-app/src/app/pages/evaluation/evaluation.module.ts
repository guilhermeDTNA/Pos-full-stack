import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationRoutingModule } from './evaluation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';
import { EvaluationFormComponent } from './evaluation-form/evaluation-form.component';

@NgModule({
  declarations: [
    EvaluationListComponent,
    EvaluationFormComponent
  ],
  imports: [
    CommonModule,
    EvaluationRoutingModule,
    SharedModule
  ]
})
export class EvaluationModule { }

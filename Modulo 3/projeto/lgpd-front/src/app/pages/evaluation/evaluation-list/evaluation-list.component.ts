import { Component, OnInit } from '@angular/core';

// adicionar imports shared service e evaluation
import { SharedService } from 'src/app/shared/shared.service';
import { EvaluationService } from '../evaluation.service';

// formatação
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.scss']
})
export class EvaluationListComponent implements OnInit { // implements OnInit e import oninit
  faPencil = faPencil;
  faTrash = faTrash;

  // atributos curso e professores
  userLabel: Array<{ value: String, label: String }> = [];
  courseLabel: Array<{ value: String, label: String }> = [];
  evaluations: any[] = [];

  // adicionar construtor ANTES do onInit
  constructor(
    private evaluationService: EvaluationService,
    private sharedService: SharedService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.listEvaluations();
    this.sharedService.getUsers().subscribe(user => this.userLabel = user);
    this.sharedService.getCourses().subscribe(course => this.courseLabel = course);
  }

  async listEvaluations(): Promise<void> {
    this.evaluations = await this.evaluationService.get<any[]>({
      url: "http://localhost:3000/getAllEvaluations",
      params: {

      }
    });
  }

  async delete(id: number): Promise<void>{
    if(confirm("Deseja deletar essa avaliação?")){
      await this.evaluationService.delete<any>({
        url: `http://localhost:3000/deleteEvaluation/${id}`,
        params: {}
      })

      await this.listEvaluations();
    }
  }

}
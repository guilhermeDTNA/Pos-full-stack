import { Component, OnInit } from '@angular/core';

//add esses imports
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { SharedService } from 'src/app/shared/shared.service';
import { EvaluationService } from '../evaluation.service';
import { CourseService } from '../../course/course.service';
import { UserService } from '../../user/user.service';
@Component({
  selector: 'app-evaluation-form',
  templateUrl: './evaluation-form.component.html',
  styleUrls: ['./evaluation-form.component.scss']
})

export class EvaluationFormComponent implements OnInit {
  // implementar essa classe toda aqui
  evaluation: any = {};

  form = new FormGroup({});
  model: any = {};
  courses: any[] = [];
  users: any[] = [];
  //Cria os campos e atribui os valores para serem gerados pelo angular

  fields: FormlyFieldConfig[] = [
    {
      className: 'd-flex align-content-center justify-content-center',
      fieldGroupClassName: 'row',
      fieldGroup: [
        //Depois com a integração com o backend vamos buscar os nomes dos cursos e usuarios disponíveis para transformar isso num campo de eescolha
        {
          key: 'concept',
          type: 'input',
          props: {
            label: 'Conceito',
            placeholder: 'Conceito da Avaliação',
            required: true,
          },
        }
      ]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private evaluationService: EvaluationService,
    private courseService: CourseService,
    private userService: UserService
  ) {


    this.route.queryParams.subscribe(async (params: any) => {
      if (params.id !== undefined && params.id !== null) {
        this.evaluation = await this.evaluationService.get<any>({
          url: `http://localhost:3000/evaluation/${params.id}`,
          params: {

          }
        });
        this.model = this.evaluation;
      } else {
        this.model = {}
      }

    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.valid) {
      if (this.model?.id !== undefined && this.model?.id !== null) {
        this.evaluation = await this.evaluationService.put<any>({
          url: `http://localhost:3000/updateEvaluation/${this.model?.id}`,
          params: {

          },
          data: this.model
        });

      } else {
        delete this.model?.id;
        await this.evaluationService.post<any>({
          url: `http://localhost:3000/addEvaluation`,
          params: {

          },
          data: this.model
        })
      }

    }
    await this.router.navigate(['/evaluations']);
  }

  async ngOnInit(): Promise<void> {
    await this.listCourses();
    await this.listUsers();
  }

  async listCourses(): Promise<void> {
    this.courses = await this.courseService.get<any[]>({
      url: "http://localhost:3000/getAllCourses",
      params: {

      }
    });
  }

  async listUsers(): Promise<void> {
    this.users = await this.userService.get<any[]>({
      url: "http://localhost:3000/getAllUsers",
      params: {

      }
    });
  }

  userSelect(e: any): void{
    this.model.user_id = e.target.closest('tr').id.replace("user-", "");
    console.log(this.model.user_id)
  }

  courseSelect(e: any): void{
    this.model.course_id = e.target.closest('tr').id.replace("course-", "");
    console.log(this.model.course_id)
  }
}
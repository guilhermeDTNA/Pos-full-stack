import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    NgIf
  ]
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    password: [null, Validators.compose([
      Validators.required, 
      Validators.minLength(5), 
      Validators.maxLength(15)
      ])
    ],
    email: ['free', Validators.compose([
      Validators.required, 
      Validators.email
    ])]
  });

  email = this.addressForm.controls['email'];

  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'O e-mail é obrigatório'
    }

    return this.email.hasError('email') ? 'Você deve preencher com um e-mail válido' : ""
  }
  
  onSubmit(): void {
    alert('Thanks!');
  }
}

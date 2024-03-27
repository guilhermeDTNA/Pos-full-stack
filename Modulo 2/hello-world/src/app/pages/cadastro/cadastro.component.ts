import { Component, OnInit, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { User } from '../../models/user';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { GenericValidator } from '../../comum/validator';
import { NgIf } from '@angular/common';

const maskConfig: Partial<IConfig> = {
  validation: true
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgIf
  ],
  providers: [
    provideNgxMask()
  ]
})
export class CadastroComponent implements OnInit {
  private fb = inject(FormBuilder);
  user: User = new User();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formBuilder.group({
      cpf: this.formBuilder.control({ value: null, disabled: false}, GenericValidator.isValidCpf())
    })
  }

  addressForm = this.fb.group({
    firstName: [null, Validators.compose([
      Validators.required, Validators.minLength(2), Validators.maxLength(35)])
    ],
    email: [null, Validators.required],
    cpf: this.formBuilder.control({ value: null, disabled: false}, GenericValidator.isValidCpf()),
    phone: [null, Validators.required],
    password: [null, Validators.required],
  });

  onSubmit(): void {
    this.user.id = 0;
    if(this.addressForm.controls["firstName"].value)
      this.user.firstName = this.addressForm.controls["firstName"].value;
    

    if(this.addressForm.controls["email"].value)
      this.user.email = this.addressForm.controls["email"].value;
    

    if(this.addressForm.controls["phone"].value)
      this.user.phone = this.addressForm.controls["phone"].value;
    
    if(this.addressForm.controls["password"].value)
      this.user.password = this.addressForm.controls["password"].value;
    
    
    alert('Cadastro efetuado');
    console.log(this.user);
    localStorage.setItem("user", JSON.stringify(this.user));
  }
}

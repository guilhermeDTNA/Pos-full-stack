import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService
  ){}

  loginForm!: FormGroup;

  login(){
    this.authService.getLoginStatus() ? this.authService.logout() : this.authService.login()
  }

  onSubmit(): void{
    if(!this.loginForm.invalid){
      this.login();  
      this.checkLogin();
    }
    
  }

  checkLogin(){
    this.authService.getLoginStatus() ? window.location.href = "/" : '';
  }

  ngOnInit(): void {   
    this.checkLogin();

    this.loginForm = new FormGroup({
      email: new FormControl('',
        [
          Validators.required,
          Validators.email
        ]
      ),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  get email(){
    return this.loginForm.get('email')!;
  }

  get password(){
    return this.loginForm.get('password')!;
  }
  
}
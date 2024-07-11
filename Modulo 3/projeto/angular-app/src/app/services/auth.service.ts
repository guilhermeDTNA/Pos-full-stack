import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Esse método que vai tratar se o login está certo
  login(){
    localStorage.setItem("login", "true");
  }

  logout(){
    localStorage.setItem("login", "false");
  }

  getLoginStatus = () => {
    const isLogged = localStorage.getItem("login") == 'true';
    return isLogged;
  };
}

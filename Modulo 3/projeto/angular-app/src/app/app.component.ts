import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public authService: AuthService){}

  public isLoggedIn = this.authService.getLoginStatus();
  title = 'lgpd-front';
  
  logout(){
    this.authService.logout();
    window.location.href = "/login";
  }
}

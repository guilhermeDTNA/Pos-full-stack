import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-button-logout',
  templateUrl: './button-logout.component.html',
  styleUrls: ['./button-logout.component.scss']
})
export class ButtonLogoutComponent {
  constructor(private authService: AuthService){}

  logout(){
    this.authService.logout();
  }
}

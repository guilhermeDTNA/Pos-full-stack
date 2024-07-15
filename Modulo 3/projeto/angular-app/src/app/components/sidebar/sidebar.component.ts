import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router){}

  public isLoggedIn = this.authService.getLoginStatus();

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.setActive();
  }

  setActive(): void{
    document.querySelectorAll('#sidebarMenu .nav-link').forEach(item => {
      if (item instanceof HTMLAnchorElement && item.href.indexOf(window.location.pathname) !== -1) {
        item.classList.add("active");
      }        
    })
  }
}

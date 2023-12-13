import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header = false;

  dropdownHandler() {
    if (!this.header) {
      (document.querySelector("#dropdown") as HTMLElement).classList.remove("hidden");
      this.header = true;
    } else {
      (document.querySelector("#dropdown") as HTMLElement).classList.add("hidden");
      this.header = false;
    }
  }

  side = false;

  openSidebar() {
    (document.querySelector("#sidebar") as HTMLElement).classList.remove("hidden");
    (document.querySelector("#sidebar") as HTMLElement).classList.add("flex");
    this.side = true;
  }

  closeSidebar() {
    (document.querySelector("#sidebar") as HTMLElement).classList.add("hidden");
    (document.querySelector("#sidebar") as HTMLElement).classList.remove("flex");
    this.side = false;
  }

  noti = false;

  dropdownNoti() {
    if (!this.noti) {
      (document.querySelector("#dropdownNotification") as HTMLElement).classList.remove("hidden");
      this.noti = true;
    } else {
      (document.querySelector("#dropdownNotification") as HTMLElement).classList.add("hidden");
      this.noti = false;
    }
  }

  constructor(private authService: AuthService, private router:Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.less']
})
export class TopNavbarComponent  {
  showNotificationCard: Boolean = false;
  islogout: Boolean = false;
  constructor(private authService: AuthService, private router: Router) {}
 
  logout() {
    this.authService.logout()
      .then(() => {
     
        console.log('logged out');
        this.router.navigate(['account/login']);
        this.islogout = true;
        // Redirect to the login page or desired location
      })
      .catch((error) => {
        // Handle error
      });
  }

  toggleNotificationCard() {
    this.showNotificationCard = !this.showNotificationCard;
    
  }
}

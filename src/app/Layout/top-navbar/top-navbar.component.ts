import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.less']
})
export class TopNavbarComponent  {
  showNotificationCard: Boolean = false;
   user:any;
   isLougout!: boolean;
  constructor(public authService: AuthService, private router: Router) {
  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event:any) => {
      const url = event.urlAfterRedirects;

      // Check if the URL contains the string "account"
      if (url.includes('account')) {
        this.isLougout = false;
      
      } else {
        this.isLougout = true
      }
    });
    }
 
  logout() { 
    this.authService.logout(); 

      // .then(() => {
     
      //   console.log('logged out');
      //   this.router.navigate(['account/login']);
      //   this.islogout = true;
      //   // Redirect to the login page or desired location
      // })
      // .catch((error) => {
      //   // Handle error
      // });
  }

  toggleNotificationCard() {
    this.showNotificationCard = !this.showNotificationCard;
    
  }
}

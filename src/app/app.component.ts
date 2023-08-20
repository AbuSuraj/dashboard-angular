import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './auth/auth.service';
import { ActivatedRoute, Router, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isDarkMode: boolean = false;
  faSun = faSun;
  faMoon = faMoon;
  inAccount: boolean = false;
  constructor(private themeService: ThemeService, public authService: AuthService, private route: ActivatedRoute, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event:any) => {
      const url = event.urlAfterRedirects;

      // Check if the URL contains the string "account"
      if (url.includes('account')) {
        this.inAccount = true;
        console.log('URL contains "account"');
        // Do something specific for URLs containing "account"
      } else {
        this.inAccount = false
        console.log('URL does not contain "account"');
        // Do something else for URLs not containing "account"
      }
    });
  
  }

  ngOnInit() {
    this.themeService.themeChange.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
   
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}

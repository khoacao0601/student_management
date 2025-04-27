import { Component } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUrl: string = '';

  constructor(public router: Router) {
     // ✅ Subscribe to router events for navigation changes
     this.router.events.subscribe(event => {
       if (event instanceof NavigationEnd) {
         this.currentUrl = event.urlAfterRedirects;
       }
     });
  }

  isPreLoginRoute(): boolean {
    return ['/','/home', '/about', '/signUp', '/professor'].includes(this.currentUrl);
  }

  isPostLoginRoute(): boolean {
    return ['/details'].includes(this.currentUrl);
  }
}

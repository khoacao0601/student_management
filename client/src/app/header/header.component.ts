import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ProfessorActions from '../state/professor/professor.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public who_login: string = '';
  public who_login_state: boolean = true;
  
  constructor (
    private router: Router, 
    private store: Store
  ) {}  

  ngOnInit(): void {
    if(this.who_login_state) {
      this.who_login = 'For Professor';
    }
  }

  isProfessorLogin(): void {
    console.log('isProfessorLogin', this.who_login_state);
    if(!this.who_login_state) {
      this.who_login = 'For Professor';
      this.who_login_state = true;
      this.store.dispatch(ProfessorActions.setIsProfessor({ isProfessor: true }));
    }else{
      this.who_login = 'For Student';
      this.who_login_state = false;
      this.store.dispatch(ProfessorActions.setIsProfessor({ isProfessor: false }));
    }
    console.log('isProfessorLoginAfter', this.who_login_state);
  }

  goToAboutPage(): void {
    this.router.navigate(['/about']);
  }
}

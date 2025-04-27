import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ProfessorActions from '../state/professor/professor.actions';
import { selectIsProfessor } from '../state/professor/professor.selectors';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public who_login: string = '';
  public who_login_state: boolean = false;

  private destroy$ = new Subject<void>(); // for unsubscribing

  isProfessor$ = this.store.select(selectIsProfessor);
  
  constructor (
    private router: Router, 
    private store: Store
  ) {}  
  

  ngOnInit(): void {
    this.isProfessor$          
    .pipe(takeUntil(this.destroy$))
    .subscribe(isProfessor => {
      console.log('isProfessor Loginbox 222', isProfessor);
      this.who_login = isProfessor ? 'Student Login' : 'Professor Login';
      this.who_login_state = isProfessor;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isProfessorLogin(): void {
    this.who_login_state ? this.store.dispatch(ProfessorActions.setIsProfessor({ isProfessor: false })) : this.store.dispatch(ProfessorActions.setIsProfessor({ isProfessor: true })) ;
  }

  goToAboutPage(): void {
    this.router.navigate(['/about']);
  }
}

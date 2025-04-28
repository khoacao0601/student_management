import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ProfessorActions from '../state/professor/professor.actions';
import { selectIsProfessor } from '../state/professor/professor.selectors';
import { take } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: false
})
export class HeaderComponent implements OnInit {
  public who_login: string = '';

  isProfessor$ = this.store.select(selectIsProfessor);
  
  constructor (
    private readonly router: Router, 
    private readonly store: Store
  ) {}  

  ngOnInit(): void {
    this.isProfessor$
      .subscribe(isProfessor => {
       this.who_login = isProfessor ? 'For Student' : 'For Professor';
      });

  }

  isProfessorLogin(): void {
   this.isProfessor$
   .pipe(take(1))
   .subscribe(isProfessor => {
    this.store.dispatch(ProfessorActions.setIsProfessor({
      isProfessor: !isProfessor
    }))
   })
  }

  goToAboutPage(): void {
    this.router.navigate(['/about']);
  }
}

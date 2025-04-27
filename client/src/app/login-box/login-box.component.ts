import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as StudentActions from '../state/student/student.actions';
import * as ProfessorActions from '../state/professor/professor.actions';
import { selectAllStudents } from '../state/student/student.selectors';
import { selectAllProfessors, selectIsProfessor } from '../state/professor/professor.selectors';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})
export class LoginBoxComponent implements OnInit, OnDestroy {
  public username: string = '';
  public password: string = '';
  public allStudents: any[] = [];
  public dataLoaded: boolean = false;
  public login_failure_warning: string = '';
  public login_welcome: string = '';

  private userName_checkPoint: boolean = false;
  private isProfessor: boolean = false;
  private destroy$ = new Subject<void>(); // for unsubscribing

  
  students$ = this.store.select(selectAllStudents);  
  isProfessor$ = this.store.select(selectIsProfessor);

  constructor(
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(StudentActions.loadStudents());

    this.students$
    .pipe(takeUntil(this.destroy$))    // automatically unsubscribes when component destroyed
    .subscribe(students => {
      this.allStudents = students;
      this.dataLoaded = true;
    });

    this.isProfessor$
    .pipe(takeUntil(this.destroy$))    // automatically unsubscribes when component destroyed
    .subscribe(professors => {
      this.isProfessor = professors;
      if(this.isProfessor) {
        this.login_welcome = 'Professor Login';
        this.store.dispatch(ProfessorActions.setIsProfessor({ isProfessor: true }));
      } else {
        this.login_welcome = 'Student Login';
        this.store.dispatch(ProfessorActions.setIsProfessor({ isProfessor: false }));
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onInputUserNameChange(event: any): void {
    this.username = event.target.value.toLowerCase();
  }

  onInputPassWordChange(event: any): void {
    this.password = event.target.value;
  }

  validateLogin(): void {
    console.log(this.isProfessor)
    if(this.username === '' || this.password === '') {
      this.login_failure_warning = 'Please enter both username and password';
      this.userName_checkPoint = false;
    }
    for (let i=0; i < this.allStudents.length; i++){
      if(this.allStudents[i].last_name.toLowerCase() === this.username && this.allStudents[i].phone_number.slice(-4) === this.password){
        this.router.navigate(['/details']);
        this.userName_checkPoint = true;
        this.login_failure_warning = '';
        break;
      } else {
        this.login_failure_warning = 'Invalid username or password';
        this.userName_checkPoint = false;
      }
    }
  }
}

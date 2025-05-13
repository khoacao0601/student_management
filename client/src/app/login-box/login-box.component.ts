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
    styleUrls: ['./login-box.component.css'],
    standalone: false,
})
export class LoginBoxComponent implements OnInit, OnDestroy {
  public username: string = '';
  public password: string = '';
  public allStudents: any[] = [];
  public allProfessors: any[] = [];
  public dataLoaded: boolean = false;
  public login_failure_warning: string = '';
  public login_welcome: string = '';

  private userName_checkPoint: boolean = false;
  private isProfessor: boolean = false;
  private readonly destroy$ = new Subject<void>(); // for unsubscribing

  
  students$ = this.store.select(selectAllStudents);
  professors$ = this.store.select(selectAllProfessors);  
  isProfessor$ = this.store.select(selectIsProfessor);

  constructor(
    private readonly router: Router,
    private readonly store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(StudentActions.loadStudents());
    this.store.dispatch(ProfessorActions.loadAllProfessors());

    this.students$
    .pipe(takeUntil(this.destroy$))    // automatically unsubscribes when component destroyed, get All students
    .subscribe(students => {
      this.allStudents = students;
      this.dataLoaded = true;
    });

    this.professors$ // get All professors
    .pipe(takeUntil(this.destroy$))    // automatically unsubscribes when component destroyed
    .subscribe(professors => {
      this.allProfessors = professors;
    });

    this.isProfessor$                 // automatically unsubscribes when component destroyed
    .pipe(takeUntil(this.destroy$))
    .subscribe(isProfessor => {
      this.isProfessor = isProfessor;
      this.login_welcome = isProfessor ? 'Professor Login' : 'Student Login';
    });
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
    console.log('boolean', this.isProfessor);
    
    if(this.username === '' || this.password === '') {
      this.login_failure_warning = 'Please enter both username and password';
      this.userName_checkPoint = false;
    }    

    this.logInCases();
  }

  logInCases(): void {
    if(this.isProfessor) {
      this.professorLogin();
    } else {
      this.studentLogin();
    }
  };

  professorLogin(): void {
    for (const professor of this.allProfessors) {
      if (professor.last_name.toLowerCase() === this.username && professor.professor_id === this.password) {
        this.router.navigate(['/details']);
        this.userName_checkPoint = true;
        this.login_failure_warning = '';
        break;
      } else {
        this.login_failure_warning = 'Invalid username or password';
        this.userName_checkPoint = false;
      }
    }
  };
  
  studentLogin(): void {
    for(const student of this.allStudents) {
      console.log('student', student);
      if (student.last_name.toLowerCase() === this.username && student.student_id.slice(-4) === this.password) {
        this.router.navigate(['/details/studentDetails']);
        localStorage.setItem('student', JSON.stringify(student));
        this.userName_checkPoint = true;
        this.login_failure_warning = '';
        break;
      } else {
        this.login_failure_warning = 'Invalid username or password';
        this.userName_checkPoint = false;
      }
    }
  };
}

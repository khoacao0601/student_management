import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllStudents } from '../state/student/student.selectors';
import { Subject, takeUntil } from 'rxjs';
import * as StudentActions from '../state/student/student.actions';
import { Student } from '../state/student/student.models';
import { Table } from 'primeng/table';

@Component({
    selector: 'app-main-details-page',
    templateUrl: './main-professor-details-page.component.html',
    styleUrls: ['./main-professor-details-page.component.css'],
    standalone: false
})
export class MainProfessorDetailsPageComponent implements OnInit, OnDestroy {
  public allStudents: Student[] = [];

  private readonly destroy$ = new Subject<void>(); // for unsubscribing

  constructor(
    private readonly store: Store,
  ) {}

  allStudents$ = this.store.select(selectAllStudents)

  ngOnInit(): void {
    this.store.dispatch(StudentActions.loadStudents()); // dispatch the action to load students

    this.allStudents$
      .pipe(takeUntil(this.destroy$)) // automatically unsubscribes when component destroyed
      .subscribe(students => {
         // make a shallow copy so it's no longer the frozen state array
        this.allStudents = [...students];
        console.log('allStudents', students);
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

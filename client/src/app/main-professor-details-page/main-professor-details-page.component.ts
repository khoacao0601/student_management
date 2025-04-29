import { Component, OnDestroy, OnInit } from '@angular/core';
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

  loading: boolean = true;

  constructor(
    private readonly store: Store,
  ) {}

  allStudents$ = this.store.select(selectAllStudents)

  ngOnInit(): void {
     // start loading
      this.loading = true;

    this.store.dispatch(StudentActions.loadStudents()); // dispatch the action to load students

    this.allStudents$
      .pipe(takeUntil(this.destroy$)) // automatically unsubscribes when component destroyed
      .subscribe(students => {
         // make a shallow copy so it's no longer the frozen state array
        this.allStudents = [...students];
        console.log('allStudents', students);
        // stop loading spinner
        this.loading = false;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  //Function and Varaiable support PrimeNg Table
  searchValue: string | undefined;

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }


  getSeverity(status: string): 'success'|'secondary'|'info'|'warn'|'danger'|'contrast'|undefined {    /*TagSeverity*/
    switch (status.toLowerCase()) {
      case 'unqualified':
        return 'danger';
      case 'qualified':
        return 'success';
      case 'new':
        return 'info';
      case 'negotiation':
        return 'warn';
      case 'renewal':
        return 'secondary';
      default:
        return undefined;
    }
  }

}

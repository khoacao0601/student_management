import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Student } from 'src/app/state/student/student.models';

import * as StudentActions from '../../state/student/student.actions';
import { selectAllStudents } from '../../state/student/student.selectors';
import { Subject, takeUntil } from 'rxjs';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-students-tab',
  standalone: false,
  templateUrl: './students-tab.component.html',
  styleUrl: './students-tab.component.css'
})
export class StudentsTabComponent {

  private readonly destroy$ = new Subject<void>(); // for unsubscribing

  public allStudents: Student[] = [];

  loading: boolean = true;

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

import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'app-student-details-page',
  standalone: false,
  templateUrl: './student-details-page.component.html',
  styleUrl: './student-details-page.component.css'
})
export class StudentDetailsPageComponent implements OnInit {

 

  public student: any = {};

  private readonly destroy$ = new Subject<void>(); // for unsubscribing
  

 
  

  ngOnInit(): void {
   const currentStudent = localStorage.getItem('currentStudent');
   if (currentStudent) {
    try {
      this.student = JSON.parse(currentStudent);
    } catch {
      console.error('Invalid JSON in localStorage for key currentStudent:', currentStudent);
      this.student = {};
    }
   } else {
    console.warn('No currentStudent in localStorage');
    this.student = {};
   }
   console.log('student 111', this.student);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}

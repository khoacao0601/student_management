import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details-page',
  standalone: false,
  templateUrl: './student-details-page.component.html',
  styleUrl: './student-details-page.component.css'
})
export class StudentDetailsPageComponent implements OnInit{

  public student: any = {};
  
  ngOnInit(): void {
    const data = localStorage.getItem('student');
    if (data) {
      try {
        this.student = JSON.parse(data);
      } catch {
        console.error('Invalid JSON in localStorage for key currentStudent:', data);
        this.student = {};
      }
     } else {
      console.warn('No currentStudent in localStorage');
      this.student = {};
     }
     console.log('student 1', this.student);
  }
}

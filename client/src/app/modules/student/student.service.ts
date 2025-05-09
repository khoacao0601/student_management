import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../../state/student/student.models';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private readonly baseUrl = '/api/students'; // Your API endpoint

  constructor(private readonly http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseUrl);
  }
}

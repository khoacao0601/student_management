import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Professor } from '../../state/professor/professor.model';

@Injectable({
  providedIn: 'root'
})

export class ProfessorsService {
    private baseUrl = '/api/professors'; // Your API endpoint

    constructor(private http: HttpClient) {}

    getAllProfessors(): Observable<Professor[]> {
        return this.http.get<Professor[]>(this.baseUrl);
    }
}
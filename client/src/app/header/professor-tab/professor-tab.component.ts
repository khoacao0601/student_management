import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professor-tab',
  templateUrl: './professor-tab.component.html',
  styleUrls: ['./professor-tab.component.css']
})
export class ProfessorTabComponent {
  public username: string = '';
  public password: string = '';
  public allProfessors: any[] = [];
  public dataLoaded: boolean = false;
  public login_failure_warning: string = '';

  private userName_checkPoint: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.http.get<any>('/api/professors').subscribe((data: any) => {
      this.allProfessors = data;
      this.dataLoaded = true;
    });
  }

  onInputUserNameChange(event: any): void {
    this.username = event.target.value.toLowerCase();
  }

  onInputPassWordChange(event: any): void {
    this.password = event.target.value;
  }

  validateLogin(): void {
    if(this.username === '' || this.password === '') {
      this.login_failure_warning = 'Please enter both username and password';
      this.userName_checkPoint = false;
    }
    for (let i=0; i < this.allProfessors.length; i++){
      if(this.allProfessors[i].last_name.toLowerCase() === this.username && this.allProfessors[i].professor_id === this.password){
        this.router.navigate(['/details']);
        this.userName_checkPoint = true;
        this.login_failure_warning = '';
        console.log(this.allProfessors[i].professor_id);
        break;
      } else {
        this.login_failure_warning = 'Invalid username or password';
        this.userName_checkPoint = false;
      }
    }
  }

}

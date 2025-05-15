import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { LOGIN_MUTATION } from './query/login.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private readonly apollo: Apollo) {}

  login(user_name: string, password: string) {
    return this.apollo.mutate({
      mutation: LOGIN_MUTATION,
      variables: { user_name, password }
    }).pipe(
      map((result: any) => {
        const token = result?.data?.login?.token;
        if (token) {
          localStorage.setItem('token', token);
        }
        return result?.data?.login?.user;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

type User = {
  email: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  registerUser(data: User) {
    return this.http.post('http://localhost:3000/register', data);
  }
  // constructor() { }
}

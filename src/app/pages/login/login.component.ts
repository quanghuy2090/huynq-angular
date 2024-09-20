import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  router: Router = inject(Router);
  authService = inject(AuthService);

  handleSubmit() {
    console.log(this.loginForm.value);
    this.authService.loginUser(this.loginForm.value).subscribe({
      next: (data) => {
        console.log('ok'),
        localStorage.setItem('token', data.accessToken),
        this.router.navigate(['/']);
      },
      error: () => alert('Error'),
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginForm!: FormGroup;
  showError = false; // Track error state
  errorMessage = 'Invalid credentials';
  showPassword = false;
  isLoggedin?: boolean;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {}

  // onLogin(): void {
  //   if (this.authService.login(this.username, this.password)) {
  //     // Redirect to the dashboard or the desired page upon successful login
  //     console.log('Login successful');
  //   } else {
  //     console.log('Login failed');
  //   }
  // }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.loginWithEmail(email, password)
      .then(() => {
        // Login successful
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        // Handle error
      });
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(() => {
        // Google login successful
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }

  // onSubmit(): void {
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   const formData = this.loginForm.value;
  //   // You can implement your login logic here, e.g., send the data to a server.
  //   console.log('Form Data:', formData);

  //   // Simulate successful login (you can implement your actual login logic here)
  // if (formData.username === 'yourUsername' && formData.password === 'yourPassword') {
  //   this.router.navigate(['/dashboard']); // Navigate to the dashboard
  // } else {
  //   this.showError = true
  //   // Handle incorrect credentials
  // }
  // }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}

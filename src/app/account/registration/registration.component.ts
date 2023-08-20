import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private toastr: ToastrService, private router: Router) {
    this.registrationForm = this.fb.group({
      username:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signUp() {
    const email = this.registrationForm.value.email;
    const password = this.registrationForm.value.password;
    this.authService.signUpWithEmail(email, password)
      // .then(() => {
      //   // Registration successful
      //   this.toastr.success('Registration successful!', 'Success');
      //   this.registrationForm.reset();
      // })
      // .catch((error) => {
      //   // Handle error
      //   this.toastr.error('Registration failed. Please try again.', 'Error');
      // });
      
  }

  signUpWithGoogle() {
    this.authService.loginWithGoogle()
      .then(() => {
        // Google signup successful
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        // Handle error
        console.log(error);
      });
  }
}


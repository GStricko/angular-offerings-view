import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  emailValidation = new FormControl('', {
    validators: [Validators.required, Validators.email],
    updateOn: 'blur'
  });

  constructor(
    private router: Router,
  ) { }

  onLoginClick() {
    if (!this.emailValidation.errors) {
      this.router.navigate(["offerings"])
    }
  }
}

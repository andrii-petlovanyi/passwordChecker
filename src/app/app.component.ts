import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passwordChecker';

  show: boolean = false;


  password: string = '';
  passwordStrength: string = '';

  showPassword() {
    this.show = !this.show;
  }

  checkPasswordStrength() {
    if (this.password.length === 0) {
      this.passwordStrength = '';
    } else if (this.password.length < 8) {
      this.passwordStrength = 'weak';
    } else if (/^[a-zA-Z]+$/.test(this.password)) {
      this.passwordStrength = 'easy';
    } else if (/^\d+$/.test(this.password)) {
      this.passwordStrength = 'easy';
    } else if (/^[!@#$%^&*]+$/.test(this.password)) {
      this.passwordStrength = 'easy';
    } else if (/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])/.test(this.password)) {
      this.passwordStrength = 'strong';
    } else if (/[a-zA-Z]/.test(this.password) && /[0-9]/.test(this.password)) {
      this.passwordStrength = 'medium';
    } else if (/[a-zA-Z]/.test(this.password) && /[!@#$%^&*]/.test(this.password)) {
      this.passwordStrength = 'medium';
    } else if (/[0-9]/.test(this.password) && /[!@#$%^&*]/.test(this.password)) {
      this.passwordStrength = 'medium';
    } else {
      this.passwordStrength = 'weak';
    }
  }

}
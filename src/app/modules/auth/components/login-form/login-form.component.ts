import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Output() login = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  get usernameControl() {
    return this.form.get('username') as FormControl;
  }

  get usernameControlInvalid() {
    return this.usernameControl.hasError('required') && this.usernameControl.touched;
  }

  get passwordControl() {
    return this.form.get('password') as FormControl;
  }

  get passwordControlInvalid() {
    return this.passwordControl.hasError('required') && this.passwordControl.touched;
  }

  loginUser(form: FormGroup) {
    const { value, valid, touched } = form;
    if (valid) {
      this.login.emit(value);
    }
  }

}

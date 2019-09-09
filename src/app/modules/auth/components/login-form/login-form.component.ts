import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  OnInit,
  ViewChild,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { FocusOnErrorDirective } from 'src/app/shared/directives';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {

  @Output() login = new EventEmitter<any>();
  @ViewChildren(FocusOnErrorDirective) fields: QueryList<FocusOnErrorDirective>;

  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit() {
  }

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
    if (valid && touched) {
      this.login.emit(value);
    } else {
      this.setFocus();
    }
  }

  setFocus() {
    const fields = this.fields.toArray();
    for (const field of fields) {
      if (field.invalid) {
        field.focus();
        break;
      }
    }
  }
}

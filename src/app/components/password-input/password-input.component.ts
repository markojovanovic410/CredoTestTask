import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent implements OnInit {
  @Output() setPassword = new EventEmitter<string>();
  PWD_MSG_REQUIRE =
    'Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.';
  PWD_MSG_SUCCESS = "Great! This will do. Just don't forget him.";
  PWD_INFO = 'Weak password';
  PWD_SUCCESS = 'Strong password';

  show: boolean = true;
  password: string = '';
  inputType: string = 'password';
  psm_show: string = 'invalidate';
  pwd_info_class: string = 'pwd-info-weak';
  pwd_info = this.PWD_INFO;
  pwd_message = this.PWD_MSG_REQUIRE;

  constructor() {}

  ngOnInit(): void {}

  onChange(event: KeyboardEvent) {
    let inputVal = (event.target as HTMLInputElement).value;
    this.password = inputVal;
    this.setPassword.emit(inputVal);
    if (inputVal.trim().length === 0) {
      this.pwd_message = this.PWD_MSG_REQUIRE;
    }
  }
  onFocus() {
    this.psm_show = 'validate';
  }
  onFocusOut() {
    this.psm_show = 'invalidate';
  }
  onShow() {
    this.show = !this.show;
    if (this.show) {
      this.inputType = 'password';
    } else {
      this.inputType = 'text';
    }
  }
  onPasswordStrengthChanged(strength: any) {
    if (strength >= 3) {
      this.pwd_info_class = 'pwd-info';
      this.pwd_info = this.PWD_SUCCESS;
      this.pwd_message = this.PWD_MSG_SUCCESS;
    } else {
      this.pwd_info_class = 'pwd-info-weak';
      this.pwd_info = this.PWD_INFO;
      this.pwd_message = '';
      if (this.password.length === 0) {
        this.pwd_message = this.PWD_MSG_REQUIRE;
      }
    }
  }
}

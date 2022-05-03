import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'CredoTask';
  fullName = '';
  email = '';
  password = '';
  phoneNumber = '';
  date = '';

  setName(name: string) {
    this.fullName = name;
  }
  setEmail(email: string) {
    this.email = email;
  }
  setPhoneNumber(phone: string) {
    this.phoneNumber = phone;
  }
  setPassword(password: string) {
    this.password = password;
  }
  setDate(dateStr: string) {
    this.date = dateStr;
  }
  onSubmit() {
    console.log('fullName', this.fullName);
    console.log('email', this.email);
    console.log('phoneNumber', this.phoneNumber);
    console.log('password', this.password);
    console.log('date', this.date);
  }
}

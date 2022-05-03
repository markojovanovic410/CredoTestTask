import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.scss'],
})
export class PhoneInputComponent implements OnInit {
  @Output() setPhoneNumber = new EventEmitter<string>();
  validate: string = 'invalidate';
  phone: string = '';
  constructor() {}

  ngOnInit(): void {}

  onChange(event: KeyboardEvent) {
    let inputVal = (event.target as HTMLInputElement).value;
    this.phone = inputVal;
    this.setPhoneNumber.emit(inputVal);
    if (inputVal === '') {
      this.validate = 'invalidate';
      return;
    }

    if (
      inputVal
        .trim()
        .match(
          /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i
        )
    ) {
      this.validate = 'validate';
    } else {
      this.validate = 'invalidate';
    }
  }
}

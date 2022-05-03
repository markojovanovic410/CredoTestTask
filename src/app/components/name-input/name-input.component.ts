import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.scss'],
})
export class NameInputComponent implements OnInit {
  @Output() setName = new EventEmitter<string>();

  validate: string = 'invalidate';
  fullName = '';
  constructor() {}

  ngOnInit(): void {}

  onChange(event: KeyboardEvent) {
    let inputVal = (event.target as HTMLInputElement).value;
    this.fullName = inputVal;
    this.setName.emit(inputVal);
    if (
      inputVal
        .trim()
        .match(
          /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
        )
    ) {
      this.validate = 'validate';
    } else {
      this.validate = 'invalidate';
    }
  }
}

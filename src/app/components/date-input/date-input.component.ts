import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { materialize } from 'rxjs';
import { DateSelectModalComponent } from '../date-select-modal/date-select-modal.component';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
})
export class DateInputComponent implements OnInit {
  @Output() setDate = new EventEmitter<string>();
  date: string = '';
  show = true;
  closeResult = '';

  config = {};
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  onChange(event: KeyboardEvent) {
    let inputVal = (event.target as HTMLInputElement).value;
    this.date = inputVal;
    this.setDate.emit(inputVal);
  }
  open() {
    const modalRef = this.modalService.open(DateSelectModalComponent);
  }
}

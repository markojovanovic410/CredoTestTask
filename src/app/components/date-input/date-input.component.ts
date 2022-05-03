import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IDatePickerConfig } from 'ng2-date-picker';
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

  config: IDatePickerConfig = {
    numOfMonthRows: 4,
    multipleYearsNavigateBy: 10,
  };
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  onChange(event: any) {
    let inputVal = event.$d;
    this.date = inputVal;
    this.setDate.emit(inputVal);
  }
  open() {
    const modalRef = this.modalService.open(DateSelectModalComponent);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-date-select-modal',
  templateUrl: './date-select-modal.component.html',
  styleUrls: ['./date-select-modal.component.scss'],
})
export class DateSelectModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}

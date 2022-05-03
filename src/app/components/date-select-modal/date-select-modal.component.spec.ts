import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSelectModalComponent } from './date-select-modal.component';

describe('DateSelectModalComponent', () => {
  let component: DateSelectModalComponent;
  let fixture: ComponentFixture<DateSelectModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateSelectModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSelectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

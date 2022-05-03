import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameInputComponent } from './components/name-input/name-input.component';
import { FormsModule } from '@angular/forms';
import { EmailInputComponent } from './components/email-input/email-input.component';
import { PhoneInputComponent } from './components/phone-input/phone-input.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { DateInputComponent } from './components/date-input/date-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateSelectModalComponent } from './components/date-select-modal/date-select-modal.component';
import { DpDatePickerModule } from 'ng2-date-picker';
@NgModule({
  declarations: [
    AppComponent,
    NameInputComponent,
    EmailInputComponent,
    PhoneInputComponent,
    PasswordInputComponent,
    DateInputComponent,
    DateSelectModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PasswordStrengthMeterModule.forRoot(),
    NgbModule,
    DpDatePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

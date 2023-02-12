import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { CalendarModule as NgCalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { components } from './components';
import { containers } from './containers';
import { layouts } from './layouts';
import { CalendarRoutingModule } from './calendar-routing.module';

@NgModule({
  declarations: [
    ...components,
    ...containers,
    ...layouts,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonToggleModule,
    NgCalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FlatpickrModule.forRoot(),
    NgbModalModule,
    FlexLayoutModule,
    CalendarRoutingModule,
  ],
  exports: [...components],
})
export class CalendarModule {}

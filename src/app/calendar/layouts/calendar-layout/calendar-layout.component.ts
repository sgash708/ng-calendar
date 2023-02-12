import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-calendar-layout',
  templateUrl: './calendar-layout.component.html',
  styleUrls: ['./calendar-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarLayoutComponent {}

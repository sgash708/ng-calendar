import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditContainerComponent } from './containers';
import { CalendarLayoutComponent } from './layouts';

const routes: Routes = [
  {
    path: '',
    component: CalendarLayoutComponent,
    children: [
      {
        path: '',
        component: EditContainerComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule {}

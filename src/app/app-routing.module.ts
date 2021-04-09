import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClockComponent } from './components/clock/clock.component';

const routes: Routes = [
  {
    path: '',
    component: ClockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

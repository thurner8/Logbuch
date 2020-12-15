import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerichtePage } from './berichte.page';

const routes: Routes = [
  {
    path: '',
    component: BerichtePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerichtePageRoutingModule {}

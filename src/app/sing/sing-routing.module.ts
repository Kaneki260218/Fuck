import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingPage } from './sing.page';

const routes: Routes = [
  {
    path: '',
    component: SingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingPageRoutingModule {}

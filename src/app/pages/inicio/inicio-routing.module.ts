import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Inicio } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: Inicio
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}

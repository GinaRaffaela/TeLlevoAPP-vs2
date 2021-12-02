import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasajeroPage } from './pasajero.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ComponentsModule],
})
export class PasajeroPageRoutingModule {}

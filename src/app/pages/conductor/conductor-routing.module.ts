import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConductorPage } from './conductor.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, ComponentsModule],
})
export class ConductorPageRoutingModule {}

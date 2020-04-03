import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaCongresoPage } from './mapa-congreso.page';

const routes: Routes = [
  {
    path: '',
    component: MapaCongresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaCongresoPageRoutingModule {}

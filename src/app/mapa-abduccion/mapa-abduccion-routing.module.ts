import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaAbduccionPage } from './mapa-abduccion.page';

const routes: Routes = [
  {
    path: '',
    component: MapaAbduccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaAbduccionPageRoutingModule {}

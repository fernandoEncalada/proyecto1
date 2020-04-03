import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaCompadresPage } from './mapa-compadres.page';

const routes: Routes = [
  {
    path: '',
    component: MapaCompadresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaCompadresPageRoutingModule {}

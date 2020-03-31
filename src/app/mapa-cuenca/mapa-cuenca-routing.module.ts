import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaCuencaPage } from './mapa-cuenca.page';

const routes: Routes = [
  {
    path: '',
    component: MapaCuencaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaCuencaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaPikaPage } from './mapa-pika.page';

const routes: Routes = [
  {
    path: '',
    component: MapaPikaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaPikaPageRoutingModule {}

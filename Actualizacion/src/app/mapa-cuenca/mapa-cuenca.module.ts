import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaCuencaPageRoutingModule } from './mapa-cuenca-routing.module';

import { MapaCuencaPage } from './mapa-cuenca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaCuencaPageRoutingModule
  ],
  declarations: [MapaCuencaPage]
})
export class MapaCuencaPageModule {}

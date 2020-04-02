import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaAbduccionPageRoutingModule } from './mapa-abduccion-routing.module';

import { MapaAbduccionPage } from './mapa-abduccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaAbduccionPageRoutingModule
  ],
  declarations: [MapaAbduccionPage]
})
export class MapaAbduccionPageModule {}

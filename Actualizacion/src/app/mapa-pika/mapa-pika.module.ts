import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaPikaPageRoutingModule } from './mapa-pika-routing.module';

import { MapaPikaPage } from './mapa-pika.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaPikaPageRoutingModule
  ],
  declarations: [MapaPikaPage]
})
export class MapaPikaPageModule {}

import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-mapa-cuenca',
  templateUrl: './mapa-cuenca.page.html',
  styleUrls: ['./mapa-cuenca.page.scss'],
})
export class MapaCuencaPage implements OnInit {

  map = null;
  markers: Marker[] = [
    {
      position: {
        lat: -2.886811,
        lng: -79.007830,
      },
      title: 'Parque la Libertad'
    },
  ];

  constructor(
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {

    const loading = await this.loadingCtrl.create();
loading.present();
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -2.886811, lng: -79.007830};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
      loading.dismiss();
    });
  }

  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });

}
}
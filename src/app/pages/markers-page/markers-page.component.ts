import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment.dev';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-markers-page',
  imports: [],
  templateUrl: './markers-page.component.html',
})
export class MarkersPageComponent implements AfterViewInit {

  divElement = viewChild<ElementRef>('map');

  map = signal<mapboxgl.Map|null>(null);

  async ngAfterViewInit() {

    if(!this.divElement()?.nativeElement) return;
    // await new Promise((resolve) => setTimeout(() => resolve, 90));

    const element = this.divElement()!.nativeElement;
    console.log(element);

    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [2.1230558295102635, 41.38098452326969], // starting position [lng, lat]
      zoom: 14 // starting zoom
    });

    const marker = new mapboxgl.Marker({
      draggable: false,
      color: 'blue'
    }).setLngLat([2.1230558295102635, 41.38098452326969])
    .addTo(map);

    marker.on('dragend', (event) => {
      console.log(event);
    });

    this.mapListeners(map);
  }

  mapListeners(map: mapboxgl.Map) {


    console.log('mapListeners');
  }
}


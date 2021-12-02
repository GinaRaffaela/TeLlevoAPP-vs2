import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    mapboxgl.accessToken = environment.mapBoxToken;
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-71.5353728, -33.0336892], // starting position 
      zoom: 15 // starting zoom
    });
    
    map.addControl(new MapboxGeocoder({
      accessToken: mapboxgl.accessToken
  }));
    
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    }));

    //map.on('idle',function(){
     // map.resize()
     // })
    
  }

}

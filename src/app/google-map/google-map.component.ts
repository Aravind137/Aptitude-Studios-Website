import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  @ViewChild('mapContainer', { static: false }) gmap!: ElementRef;

  map!: google.maps.Map;

  lat = 13.08033;
  lng = 80.25008;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 16,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });


  constructor() {
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    this.marker.setMap(this.map);
  }
}

import { Component, AfterViewInit, AfterViewChecked } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  standalone: true,
})
export class MapComponent  implements AfterViewInit, AfterViewChecked {
  private map!:L.Map;
  constructor() { }

  ngAfterViewInit() {
    this.initMap();
  }
  ngAfterViewChecked() {
    this.updateLeafletMap();
  }


  private initMap(): void {
    
    //Set provider for the basemap
    //https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

    //create a lat long object
    let GUN79 = L.latLng(-27.55305, 153.05162);
    let GUN44 = L.latLng(-27.55330, 153.05217);
    let GUN18 = L.latLng(-27.55272, 153.05354);
    let GUN02 = L.latLng(-27.55141, 153.05355);
    //basemap url
    const baseMapURl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    //create an icon
   let myIcon = L.icon({
      iconUrl: 'assets/icon/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [25, 41],
      popupAnchor: [-3, -76],
      shadowUrl: 'assets/icon/marker-shadow.png',
      shadowSize: [41, 41],
      shadowAnchor: [41, 41]
  });

    //Set the dom element that will hold the this.map.
    this.map = L.map('map');

    //create tilelayer
    L.tileLayer(baseMapURl,{minZoom:8,maxZoom:17}).addTo(this.map);

    //create marker, add to map, add popup, open popup
    let n79 = L.marker(GUN79,{icon:myIcon})
      .bindPopup("N79 - Griffith University");
    let n44 = L.marker(GUN44,{icon:myIcon})
      .bindPopup("N44 - Griffith University");
    let n18 = L.marker(GUN18,{icon:myIcon})
      .bindPopup("N18 - Central Theatres Griffith University");
    let n02 = L.marker(GUN02,{icon:myIcon})
      .bindPopup("N02 - Cinema Griffith University");  

     //define a grouping of layers that can be tunred on and off. 
    let buildings = L.layerGroup([n79,n44]);
    let lecrooms = L.layerGroup([n18,n02]);

    let overlayMaps = {
      "Buildings": buildings,
      "Lecture Roomss":lecrooms
    };
  
    //create layer control icon in top right of map.
    var layerControl = L.control.layers(overlayMaps).addTo(this.map)

    //create a circle around a point
    L.circleMarker(GUN79,{radius:30,stroke:true,color:'#ffaaaa'}).addTo(this.map);
    
    //sets the view of the map(center and zoom)
    this.map.setView(GUN79,13);


  
  }
  private updateLeafletMap(){
    this.map.invalidateSize();
  }

}

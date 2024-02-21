# Ionic/Angular Mapping demo
## Setup
- Ionic 7.5.0
- Angular 17.02 
- leaflet 1.9.4 (leaflet.js.com)
## Installation of demo

1. clone the repo ' **git clone https://github.com/abrowning-gu/leaflet-map.git** '
2. run '**npm install**' to install dependencies.
3. run '**ionic serve**' to start the app running in a browser.

The demo show the display of  
- openstreetmaps map centered on N79 building at Griffith Univeristy.
- multiple interactive layers of data (markers)
- Popup on markers
- circle Marker


## To Create from Scratch
Assuming node and ionic cli are already installed.
1. **ionic start map blank**
2. select angular as the framework.
3. Select standalone component option
4. setup leaflet dependency **npm install --save leaflet**
5. add leaflet type definitions **npm install --save-dev @types/leaflet**
6. Add leaflet css to angular.json  - projects-> achitect -> build -> options -> styles array  "./node_modules/leaflet/dist/leaflet.css"
7. create a component for the map **ionic g component comp/map**
8. Add 'standalone:true' to the @component decorator if the component was not created as a standalone component.
9. import the leaflet package to the map component. **import * as L from 'leaflet'**
10. To enable leaflet to reference DOM elements we must wait until they are available. We can use the angular lifecycle methods of AfterViewInt and AfterViewChecked to initialise the map and update it.
11. Leaflet can have an issue where only tiled square shows up but on reszing the window it all works perfectly.  Calling the invalidateSize() method in the ngAfterViewChecked method will fix that problem
12. A BaseMapUrl is required as the provider of the mapping data. openstreetmaps.org is used in the demo but other providers are available.  Most will require signing up to a service to get an API key. Some are free some are not. The baseMapURl of openstreetmaps is **'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'**
13. The default marker icons should be copied from the node_modules/leaflet/dist/images directory to the **assets** directory of your app. You can use your own marker icons if your wish.

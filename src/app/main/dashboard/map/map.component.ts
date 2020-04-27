import { Component, OnInit } from '@angular/core';
import {MapService} from '../services/map/map.service';
// tslint:disable-next-line:class-name
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
}
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
 // lat;
 // lng;
 // location;

 // data = {
 //     ip: '103.124.249.250',
 //     type: 'ipv4',
 //     continent_code: 'AS',
 //     continent_name: 'Asia',
 //     country_code: 'BD',
 //     country_name: 'Bangladesh',
 //     region_code: 'C',
 //     region_name: 'Dhaka',
 //     city: 'N\u0101garpur',
 //     zip: null,
 //     latitude: 24,
 //     longitude: 90,
 //     location: {
 //         geoname_id: 1185159,
 //         capital: 'Dhaka',
 //         languages: [
 //             {
 //                 code: 'bn',
 //                 name: 'Bengali',
 //                 native: '\u09ac\u09be\u0982\u09b2\u09be'
 //             }
 //         ],
 //         country_flag: 'http:\/\/assets.ipapi.com\/flags\/bd.svg',
 //         country_flag_emoji: '\ud83c\udde7\ud83c\udde9',
 //         country_flag_emoji_unicode: 'U+1F1E7 U+1F1E9',
 //         calling_code: '880',
 //         is_eu: false
 //     }
 // };
    zoom = 8;

    // initial center position for the map
    lat = 24;
    lng = 90;
    markers: marker[] = [
        {
            lat: 24.010036118736007,
            lng: 90.428466796875,
            label: 'A',
            draggable: true
        },
        {
            lat: 23.89708469617491,
            lng: 90.208740234375,
            label: 'B',
            draggable: false
        },
        {
            lat: 24.912541787393533,
            lng: 90.59051513671875,
            label: 'C',
            draggable: true
        },

        {
            lat: 23.096100704953137,
            lng: 91.85394287109375,
            label: 'D',
            draggable: true
        },
        {
            lat: 23.096100704953137,
            lng: 91.85394287109375,
            label: 'E',
            draggable: true
        },
        {
            lat: 22.457940508956277,
            lng: 90.52459716796875,
            label: 'F',
            draggable: true
        },
        {
            lat: 22.84321998287829,
            lng: 89.51385498046875,
            label: 'G',
            draggable: true
        },
        {
            lat: 24.713099734454147,
            lng: 91.53533935546875,
            label: 'H',
            draggable: true
        },
        {
            lat: 24.052680885016073,
            lng: 89.17327880859375,
            label: 'I',
            draggable: true
        },
        {
            lat: 24.892612037309508,
            lng: 89.04144287109375,
            label: 'J',
            draggable: true
        },
        {
            lat: 25.786237226476846,
            lng: 89.23919677734375,
            label: 'K',
            draggable: true
        },
        {
            lat: 23.29301807282304,
            lng: 90.93658447265625,
            label: 'L',
            draggable: true
        },
        {
            lat: 23.889551086453032,
            lng: 90.70037841796875,
            label: 'M',
            draggable: true
        },
        {
            lat: 23.64572851584616,
            lng: 90.4998779296875,
            label: 'N',
            draggable: true
        },
        {
            lat: 23.763926408627412,
            lng: 90.384521484375,
            label: 'O',
            draggable: true
        },
        {
            lat: 23.62056622774117,
            lng: 90.45867919921875,
            label: 'P',
            draggable: true
        },
        {
            lat: 23.82424143390677,
            lng: 90.38726806640625,
            label: 'Q',
            draggable: true
        },
        {
            lat: 23.81167811277691,
            lng: 90.45318603515625,
            label: 'R',
            draggable: true
        },
        {
            lat: 23.861924097698044,
            lng: 90.42022705078125,
            label: 'S',
            draggable: true
        }
    ];
  constructor( private mapService: MapService) { }

  ngOnInit(): void {
      // this.lat = this.data.latitude;
      // this.lng = this.data.longitude;
      // this.mapService.getLocation().subscribe( data => {
      //     console.log(data);
      //     this.lat = data.latitute;
      //     this.lng = data.longitude;
      // });
  }

    // onMapClick($event: any): void {
    //     console.log($event);
    //     this.lat = $event.coords.lat;
    //     this.lng = $event.coords.lng;
    // }



    clickedMarker(label: string, index: number): void {
        console.log(`clicked the marker: ${label || index}`);
    }

    mapClicked($event: any): void {
        console.log($event.coords);
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    }

    markerDragEnd(m: marker, $event: MouseEvent): void {
        console.log('dragEnd', m, $event);
    }

}

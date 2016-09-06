import {DataService} from "./dataService.js";
import {Seat} from './seat.js';
export class SeatingChart {

     constructor(){
         this.service = new DataService();
         this.seat = new Seat();
     }

     render() {
         let seat = this.seat;
         var g_seat = document.getElementById('g_seat');
         var data = seats.data;
         var obj;
         data.forEach(function (o, index) {
             obj = seat.create();
             var x = (o.x + 0.5) * 2;
             var y = (o.y + 0.5) * 2;
             obj.setAttribute('x', x);
             obj.setAttribute('y', y);
             g_seat.appendChild(obj);
         })
     }
 }

import {SeatingChart} from './seating-chart.js';
import {selectElement} from './svg-drag.js';
import {Global} from './global.js';

let g = Global.get();
g.syncSvgPx({x:80,y:60});

let chart = new SeatingChart();
chart.render();

var doFocus = function (obj,value) {
    var vSize = g.getViewSize();
    chart.focus(obj, value, vSize);
}

var doScale = function (value) {
    var vSize = g.getViewSize();
    chart.scale( value, vSize);
}

document.getElementById("focusBtn").onclick = function () {
    var value = 1.25;
    var obj = document.getElementById('g_seat');
    doFocus (obj,value);
}

document.getElementById("zoomOutBtn").onclick = function () {
    var value = 1.25;
    doScale (value);
}

document.getElementById("zoomInBtn").onclick = function () {
    var value = 0.8;
    doScale (value);
}

document.getElementById("bg").onmousedown = function (evt) {
    selectElement(evt);
}



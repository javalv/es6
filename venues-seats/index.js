import {SeatingChart} from './seating-chart.js';
import {selectElement} from './svg-drag.js';
import {Global} from './global.js';


// let svgDrag = new SvgDrag();
let g = Global.get();
let x = 80;
let y = 60;
g.syncSvgPx({x,y});

let chart = new SeatingChart();
chart.render();

var doFocus = function (value) {
    var obj = document.getElementById('g_seat');
    var vSize = {x: 80, y: 60};
    var box = obj.getBBox();
    var x = box.x + box.width / 2;
    var y = box.y + box.height / 2;
    chart.focus({x, y}, value, vSize);
}

var doScale = function (value) {
    var obj = document.getElementById('g_seat');
    var vSize = {x: 80, y: 60};
    chart.scale( value, vSize);
}

document.getElementById("focusBtn").onclick = function () {
    var value = 1.5;
    doFocus (value);
}

document.getElementById("zoomOutBtn").onclick = function () {
    var value = 1.5;
    doScale (value);
}

document.getElementById("zoomInBtn").onclick = function () {
    var value = 0.67;
    doScale (value);
}

document.getElementById("bg").onmousedown = function (evt) {
    selectElement(evt);
}



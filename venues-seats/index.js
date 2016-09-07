import {SeatingChart} from './seating-chart.js';
import {selectElement} from './svg-drag.js';

// let svgDrag = new SvgDrag();

let chart = new SeatingChart();
chart.render();

var doScale = function (value) {
    var obj = document.getElementById('g_seat');
    var vSize = {x: 80, y: 60};
    var box = obj.getBBox();
    var x = box.x + box.width / 2;
    var y = box.y + box.height / 2;
    chart.scale({x, y}, value, vSize);
}

document.getElementById("zoomOutBtn").onclick = function () {
    var value = 1.5;
    doScale(value);
}

document.getElementById("zoomInBtn").onclick = function () {
    var value = 0.67;
    doScale(value);
}

document.getElementById("bg").onmousedown = function (evt) {
    selectElement(evt);
}



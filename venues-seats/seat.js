const SVG_NS = "http://www.w3.org/2000/svg";
const XLINK_NS = "http://www.w3.org/1999/xlink";
export class Seat {

    create(){
        var seat = document.getElementById('seat');
        return this.createUse(seat);
    }

    createUse(obj) {
        var _use = document.createElementNS(SVG_NS, 'use');
        _use.setAttributeNS(XLINK_NS, 'xlink:href', '#' + obj.id);
        return _use;
    }

}


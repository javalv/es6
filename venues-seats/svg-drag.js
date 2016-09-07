import {SvgOptions} from './svg-options.js';
export class SvgDrag {

    constructor() {
        this.selectedElement = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.currentMatrix = 0;
        this.svgOptions = new SvgOptions();
    }

    selectElement(evt) {
        this.selectedElement = evt.target;
        console.log(this.selectedElement);

        this.currentX = evt.clientX;
        this.currentY = evt.clientY;

        let attrsMap = this.svgOptions.getAttrs(this.selectedElement.getAttributeNS(null, "transform"));

        this.currentMatrix = attrsMap.get('translate');


        for (var i = 0; i < this.currentMatrix.length; i++) {
            this.currentMatrix[i] = parseFloat(this.currentMatrix[i]);
        }

        this.selectedElement.setAttributeNS(null, "onmousemove", "moveElement(evt)");
        this.selectedElement.setAttributeNS(null, "onmouseout", "deselectElement(evt)");
        this.selectedElement.setAttributeNS(null, "onmouseup", "deselectElement(evt)");
    }

    moveElement(evt) {
        let dx = evt.clientX - this.currentX;
        let dy = evt.clientY - this.currentY;
        this.currentMatrix[0] += dx / 5.0;
        this.currentMatrix[1] += dy / 5.0;

        this.svgOptions.setTransform(this.selectedElement,'translate',this.currentMatrix,false);

        let all_view = document.getElementById("all_view");
        this.svgOptions.setTransform(all_view,'translate',this.currentMatrix,false);

        this.currentX = evt.clientX;
        this.currentY = evt.clientY;
    }

    deselectElement(evt) {
        var selectedElement = this.selectedElement;
        if (selectedElement != 0) {
            selectedElement.removeAttributeNS(null, "onmousemove");
            selectedElement.removeAttributeNS(null, "onmouseout");
            selectedElement.removeAttributeNS(null, "onmouseup");
            selectedElement = 0;
        }
    }
}

var svgDrag = new SvgDrag();
export var selectElement = function(evt) {
    svgDrag.selectElement(evt);
}
window.moveElement = function(evt) {
    svgDrag.moveElement(evt);
}
window.deselectElement = function(evt) {
    svgDrag.deselectElement(evt);
}
import {DataService} from "./dataService.js";
import {Seat} from './seat.js';
import {SvgOptions,SvgOptionsAttrs} from './svg-options.js';
export class SeatingChart {

    constructor() {
        this.service = new DataService();
        this.seat = new Seat();
        this.svgOptions = new SvgOptions();
    }

    render() {
        let seat = this.seat;
        var data = this.service.getSeats();
        var g_seat = document.getElementById('g_seat');
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

    /**
     * 按缩放比例居中，根据坐标点
     // * @param center 中心点坐标
     * @param obj 选中对象
     * @param value 缩放大小值
     * @param vSize viewBox大小
     // * @param obj 缩放对象
     */
    focus(obj,value, vSize) {

        var box = obj.getBBox();
        var x = box.x + box.width / 2;
        var y = box.y + box.height / 2;

        let v_size_x = vSize.x;
        let v_size_y = vSize.y;

        //v_size_x / 2 /value
        let scale_x = v_size_x / (2.0 * value) - x;
        let scale_y = v_size_y / (2.0 * value) - y;

        let all_view = document.getElementById("all_view");
        let optionsAttrs = SvgOptionsAttrs.createOptionsAttrs();
        optionsAttrs.addAttr('scale',[value,value])
            .addAttr('translate',[scale_x,scale_y]);
        this.svgOptions.setTransformOptions(all_view,optionsAttrs);

        let bg = document.getElementById("bg");
        this.svgOptions.setTransformOptions(bg,optionsAttrs);

    }

    scale(value,vSize){
        let obj = document.getElementById("all_view");
        let optionsAttrs = SvgOptionsAttrs.createOptionsAttrs();

        let v_size_x = vSize.x;
        let v_size_y = vSize.y;

        let attrs = this.svgOptions.getTransformAttrs(obj);

        let tx = 0;
        let ty = 0;
        let t = attrs.get('translate');
        if(t){
            tx = t[0];
            ty = t[1];
        }

        var scaleAttr = this.svgOptions.getTransformAttr(obj,'scale');
        if(!scaleAttr){
            scaleAttr = [1,1];
        }

        //先计算想要缩放的中心点在视窗中的位置
        let center_x = v_size_x / (2.0 * scaleAttr[0]) - tx;
        let center_y = v_size_y / (2.0 * scaleAttr[0]) - ty;

        let scaleValue = scaleAttr[0] * value;

        let scale_x = v_size_x / (2.0 * scaleValue) - center_x;
        let scale_y = v_size_y / (2.0 * scaleValue) - center_y ;

        optionsAttrs.addAttr('scale',[scaleValue,scaleValue])
            .addAttr('translate',[scale_x,scale_y]);

        this.svgOptions.setTransformOptions(obj,optionsAttrs);
        let bg = document.getElementById("bg");
        this.svgOptions.setTransformOptions(bg,optionsAttrs);
    }

}

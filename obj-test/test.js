// import {moduleTest} from './module';
var birth = '2000/01/01';
var Person = {
    name: '张三',
    //等同于birth: birth
    birth,
    // 等同于hello: function ()...
    hello() { console.log('我的名字是', this.name + ' ' + this.birth); }
};

Person.hello();

//----------------------------
var cart = {
    _wheels: 4,

    get wheels () {
        return this._wheels;
    },

    set wheels (value) {
        if (value < this._wheels) {
            throw new Error('数值太小了！');
        }
        this._wheels = value;
    }
}
cart.wheels = 10;
console.info(cart.wheels);
// cart.wheels = 2;

//--------------------------------
class People {
    constructor(name) { //构造函数
        this.name = name;
    }
    get name() {
        return this._name.toUpperCase();
    }
    set name(name) {
        this._name = name;
    }
    sayName() {
        console.log(this.name);
    }
}
var p = new People("tom");
console.log(p.name);    //1
console.log(p._name);    //2
p.name = 'zhangsan';
p.sayName();    //3

//------------------------
let a = [1, 2, 3].map(x => x * x);
console.info(a);

const arr = [
    {"zhang":"张三"},
    {"li":"李四"},
]
let map = new Map();
map.set("zhang","张三");
map.set("li","李四");
for (let key of map.keys()) {
    console.log(key);
}
for (let value of map.values()) {
    console.log(value);
}
for (let item of map.entries()) {
    console.log(item[0], item[1]);
}

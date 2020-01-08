"use strict";
/*
接口的作用：在面向对象的编程中，接口是一种规范的定义，
它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。

接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，
也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。

typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
*/
// 1、属性接口，对json的约束
function printLabel(labelInfo) {
    console.log('labelInfo: ' + labelInfo.label);
}
printLabel({ label: 'AA' });
function printPerson(person) {
    console.log('Person:name', person.name);
    console.log('Person:age', person.age);
}
printPerson({ name: 'BB', age: 19 });
var md5 = function (key, value) {
    return key + value;
};
console.log(md5('123', 'ABC'));
var array1 = ['aaa', 'bbb', 'ccc'];
var object1 = {
    name: 'ZXC'
};
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log(this.name + '吃粮食！');
    };
    return Dog;
}());
var d = new Dog('拉布拉多');
d.eat();
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function (food) {
        console.log(this.name + '吃' + food);
    };
    return Cat;
}());
var c = new Cat('小花猫');
c.eat('鱼干');
var SmallDog = /** @class */ (function () {
    function SmallDog(name) {
        this.name = name;
    }
    SmallDog.prototype.eat = function () {
        console.log(this.name + '吃骨头');
    };
    SmallDog.prototype.run = function () {
        console.log(this.name + '在奔跑🏃');
    };
    SmallDog.prototype.cry = function () {
        console.log(this.name + '汪汪叫');
    };
    return SmallDog;
}());
var sd = new SmallDog('小二哈');
sd.eat();
sd.run();
sd.cry();

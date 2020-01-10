"use strict";
/*
命名空间:
    在代码量较大的情况下，为了避免各种变量命名相冲突，可将相似功能的函数、类、接口等放置到命名空间内。
    同Java的包、.Net的命名空间一样，TypeScript的命名空间可以将代码包裹起来，只对外暴露需要在外部访问的对象。
    命名空间内的对象通过export关键字对外暴露。

命名空间和模块的区别：

    命名空间：内部模块，主要用于组织代码，避免命名冲突。
    模块：ts的外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间。
*/
Object.defineProperty(exports, "__esModule", { value: true });
var A;
(function (A) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.eat = function () {
            console.log('命名空间A' + this.name + '狗' + '吃狗粮');
        };
        return Dog;
    }());
    A.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.eat = function () {
            console.log('命名空间A' + this.name + '猫🐈' + '吃鱼干');
        };
        return Cat;
    }());
    A.Cat = Cat;
})(A || (A = {}));
var B;
(function (B) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.run = function () {
            console.log('命名空间B' + this.name + '狗:' + 'run....');
        };
        return Dog;
    }());
    B.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat(name) {
            this.name = name;
        }
        Cat.prototype.run = function () {
            console.log('命名空间B' + this.name + '猫🐈' + 'run.......');
        };
        return Cat;
    }());
    B.Cat = Cat;
})(B || (B = {}));
var a_cat = new A.Cat('大白');
a_cat.eat();
var animal_1 = require("./modules/animal");
var pig = new animal_1.C.Pig('小野猪');
pig.run();

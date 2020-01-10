"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var C;
(function (C) {
    var Dog = /** @class */ (function () {
        function Dog(name) {
            this.name = name;
        }
        Dog.prototype.run = function () {
            console.log('命名空间C' + this.name + '狗:' + 'run....');
        };
        return Dog;
    }());
    var Pig = /** @class */ (function () {
        function Pig(name) {
            this.name = name;
        }
        Pig.prototype.run = function () {
            console.log('命名空间C' + this.name + '猪🐷 ' + '--run....');
        };
        return Pig;
    }());
    C.Pig = Pig;
})(C = exports.C || (exports.C = {}));

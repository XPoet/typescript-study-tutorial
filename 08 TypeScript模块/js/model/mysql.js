"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MySQL = /** @class */ (function () {
    function MySQL() {
    }
    MySQL.prototype.add = function (info) {
        console.log('add...');
        console.log(info);
        return true;
    };
    MySQL.prototype.update = function (info, id) {
        console.log('update...');
        console.log(info);
        return true;
    };
    MySQL.prototype.delete = function (id) {
        console.log('delete...');
        return true;
    };
    MySQL.prototype.get = function (id) {
        console.log('get...');
        var list = [
            {
                name: 'AA',
                age: 10
            },
            {
                name: 'BB',
                age: 11
            }
        ];
        return list;
    };
    return MySQL;
}());
exports.MySQL = MySQL;

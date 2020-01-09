"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url = 'https://itpoet.cn';
exports.url = url;
function getData() {
    console.log('getData...');
    return [
        { name: 'A', age: 10 },
        { name: 'B', age: 11 }
    ];
}
exports.getData = getData;
function saveData() {
    console.log('saveData...');
    return true;
}
exports.saveData = saveData;

"use strict";
/*
    TypeScript中的函数
    3.1、函数的定义
    3.2、可选参数
    3.3、默认参数
    3.4、剩余参数
    3.5、函数重载
    3.6、箭头函数
*/
// 函数声明法
function runFn() {
    return 'runfn()';
}
// 匿名函数
var runFn2 = function () {
    return 'runFn2()';
};
// 定义方法传参
function getInfo1(name, age) {
    return "name: " + name + ", age: " + age;
}
console.log(getInfo1('小明', 18));
// 无返回值
function runFn3() {
    console.log('runFn3()');
}
// 可选参数
function getInfo2(name, age) {
    if (age) {
        return "\u53EF\u9009\u53C2\u6570 --> name: " + name + ", age: " + age;
    }
    else {
        return "\u53EF\u9009\u53C2\u6570 --> name: " + name + ", age: \u4E0D\u8BE6";
    }
}
console.log(getInfo2('小红'));
// 默认参数
function getInfo3(name, age) {
    if (age === void 0) { age = 19; }
    return "\u9ED8\u8BA4\u53C2\u6570 --> name: " + name + ", age: " + age;
}
console.log(getInfo3('小花'));
console.log(getInfo3('小花', 20));
// 剩余参数
function sum1(a, b, c, d) {
    return a + b + c + d;
}
console.log('sum1(1, 2, 3, 4) --> ', sum1(1, 2, 3, 4));
/* 三点运算符，接收形参传过来的值 */
function sum2() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log('sum2(1, 2, 3, 4) --> ', sum2(1, 2, 3, 4));
console.log('sum2(1, 2, 3, 4, 5, 6, 7, 8) --> ', sum2(1, 2, 3, 4, 5, 6, 7, 8));
function sum3(a, b) {
    var result = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        result[_i - 2] = arguments[_i];
    }
    var sum = a + b;
    for (var i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log('sum3(1, 2, 3, 4, 5, 6) --> ', sum3(1, 2, 3, 4, 5, 6));
console.log('sum3(1, 2, 3, 4, 5, 6, 7, 8) --> ', sum3(1, 2, 3, 4, 5, 6, 7, 8));
function getUserInfo(argument) {
    if (typeof argument === 'string') {
        return '我叫：' + argument;
    }
    else {
        return '我的年龄是：' + argument;
    }
}
console.log('TS函数重载 --> ', getUserInfo('李白'));
console.log('TS函数重载 --> ', getUserInfo(108));
function getUserInfo2(name, age) {
    if (age) {
        return "\u540D\u5B57\uFF1A" + name + "\uFF0C\u5E74\u9F84\uFF1A" + age;
    }
    else {
        return "\u540D\u5B57\uFF1A" + name;
    }
}
console.log('TS函数重载 --> getUserInfo2() ', getUserInfo2('小晴'));
console.log('TS函数重载 --> getUserInfo2() ', getUserInfo2('小晴', 11));
// 箭头函数 ES6 （箭头函数里面的this指向上下文）
setTimeout(function () {
    // console.log(this); 
    console.log('es5函数');
}, 1000);
setTimeout(function () {
    // console.log(this)
    console.log('箭头函数');
}, 1000);

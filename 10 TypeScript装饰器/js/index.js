"use strict";
/*
    装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

    通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）

    装饰器是过去几年中js最大的成就之一，已是ES7的标准特性之一
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 
// 1.1、类装饰器：普通装饰器（无法传参）
function logClass(params) {
    console.log(params);
    // params 就是当前类
    params.prototype.desc = '动态扩展的属性';
    params.prototype.run = function () {
        console.log('@logClass装饰器里面的方法：' + 'run()方法');
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.get = function () {
    };
    HttpClient = __decorate([
        logClass
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
console.log('@logClass装饰器里面的属性：' + http.desc);
http.run();
console.log('------------------------------------------------------------------');
// 1.2、类装饰器：装饰器工厂（可传参）
function logClass2(params) {
    return function (target) {
        console.log('target（使用装饰器的class）: ', target);
        console.log('params（装饰器传过来的参数）: ', params);
        target.prototype.url = params;
    };
}
var HttpClient2 = /** @class */ (function () {
    function HttpClient2() {
    }
    HttpClient2.prototype.get = function () {
    };
    HttpClient2 = __decorate([
        logClass2('https://itpoet.cn')
    ], HttpClient2);
    return HttpClient2;
}());
var http2 = new HttpClient2();
console.log('类装饰器：装饰器工厂（可传参）' + http2.url);
console.log('------------------------------------------------------------------');
// 重载构造函数的例子
// 类装饰器表达式会在运行时当做函数被调用，类的构造函数作为其唯一的参数
// 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
function logClass3(target) {
    console.log('target（使用装饰器的类）: ', target);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.url = '修改后的数据';
            return _this;
        }
        class_1.prototype.get = function () {
            // 改变使用装饰器的那个类的构造函数
            this.url = this.url + '--';
            console.log('装饰器里面的get() ' + this.url);
        };
        return class_1;
    }(target));
}
var HttpClient3 = /** @class */ (function () {
    function HttpClient3() {
        this.url = '构造函数里面的url';
    }
    HttpClient3.prototype.get = function () {
        console.log('类：HttpClient3 get()' + this.url);
    };
    HttpClient3 = __decorate([
        logClass3
    ], HttpClient3);
    return HttpClient3;
}());
var http3 = new HttpClient3();
http3.get();
console.log('------------------------------------------------------------------');
console.log('------------------------------------------------------------------');
// 属性装饰器（两个参数）
// 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
// 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 2、成员的名字。
// 1 类装饰器
function logClass4(params) {
    return function (target) {
    };
}
// 2 属性装饰器
function logProperty(params) {
    // params 属性装饰器传入的参数
    return function (target, attr) {
        console.log('target（使用属性装饰器的类）: ', target);
        console.log('attr(使用属性装饰器的类的那个属性): ', attr);
        target[attr] = params;
    };
}
var HttpClient4 = /** @class */ (function () {
    function HttpClient4() {
    }
    HttpClient4.prototype.get = function () {
        console.log('url: ', this.url);
    };
    __decorate([
        logProperty('https://itpoet.cn')
    ], HttpClient4.prototype, "url", void 0);
    HttpClient4 = __decorate([
        logClass4('xx')
    ], HttpClient4);
    return HttpClient4;
}());
var http4 = new HttpClient4();
http4.get();
console.log('------------------------------------------------------------------');
console.log('------------------------------------------------------------------');
// 3 方法装饰器
// 会被应用到方法的属性描述符上，可以用来监视、修改或者替换方法定义
// 方法装饰器在运行时传入下列3个参数：
//  1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
//  2、成员的名字。
//  3、成员的属性描述符。
function logParams(params) {
    // params 方法装饰器传入的参数
    return function (target, methodName, paramsIndex) {
        console.log('params（方法装饰器传入的参数）: ', params);
        console.log('target（使用方法装饰器的类）: ', target);
        console.log('methodName(使用方法装饰器的类的方法名): ', methodName);
        console.log('paramsIndex: ', paramsIndex);
        target.url = params;
    };
}
var HttpClient5 = /** @class */ (function () {
    function HttpClient5() {
    }
    HttpClient5.prototype.get = function (uuid) {
        console.log('uuid: ', uuid);
    };
    __decorate([
        __param(0, logParams('ABC'))
    ], HttpClient5.prototype, "get", null);
    return HttpClient5;
}());
var http5 = new HttpClient5();
http5.get(123);
console.log('http5.url', http5.url);

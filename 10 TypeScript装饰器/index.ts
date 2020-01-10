/*
    装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

    通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

    常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器

    装饰器的写法：普通装饰器（无法传参） 、 装饰器工厂（可传参）

    装饰器是过去几年中js最大的成就之一，已是ES7的标准特性之一
*/

// 1、类装饰器：类装饰器在类声明之前被声明（紧靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。 
// 1.1、类装饰器：普通装饰器（无法传参）
function logClass(params: any) {
    console.log(params);
    // params 就是当前类
    params.prototype.desc = '动态扩展的属性'
    params.prototype.run = function () {
        console.log('@logClass装饰器里面的方法：' + 'run()方法');
    }
}


@logClass
class HttpClient {

    constructor() {

    }

    get() {

    }
}

const http: any = new HttpClient();
console.log('@logClass装饰器里面的属性：' + http.desc);
http.run();

console.log('------------------------------------------------------------------');

// 1.2、类装饰器：装饰器工厂（可传参）
function logClass2(params: string) {

    return function (target: any) {

        console.log('target（使用装饰器的class）: ', target);
        console.log('params（装饰器传过来的参数）: ', params);
        target.prototype.url = params;
    }

}


@logClass2('https://itpoet.cn')
class HttpClient2 {

    constructor() {

    }

    get() {

    }

}

const http2: any = new HttpClient2();
console.log('类装饰器：装饰器工厂（可传参）' + http2.url);

console.log('------------------------------------------------------------------');

// 重载构造函数的例子
// 类装饰器表达式会在运行时当做函数被调用，类的构造函数作为其唯一的参数
// 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
function logClass3(target: any) {
    console.log('target（使用装饰器的类）: ', target);

    return class extends target {
        url: any = '修改后的数据'
        get() {
            // 改变使用装饰器的那个类的构造函数
            this.url = this.url + '--'
            console.log('装饰器里面的get() ' + this.url);
        }
    }
}


@logClass3
class HttpClient3 {
    public url: string | undefined;

    constructor() {

        this.url = '构造函数里面的url'

    }

    get() {
        console.log('类：HttpClient3 get()' + this.url);
    }
}

const http3 = new HttpClient3();
http3.get();

console.log('------------------------------------------------------------------');
console.log('------------------------------------------------------------------');


// 属性装饰器（两个参数）
// 属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
// 1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 2、成员的名字。

// 1 类装饰器
function logClass4(params: string) {
    return function (target: any) {

    }
}

// 2 属性装饰器
function logProperty(params: any) {

    // params 属性装饰器传入的参数

    return function (target: any, attr: any) {
        console.log('target（使用属性装饰器的类）: ', target);
        console.log('attr(使用属性装饰器的类的那个属性): ', attr);
        target[attr] = params;
    }
}

@logClass4('xx')
class HttpClient4 {

    @logProperty('https://itpoet.cn')
    public url: any | undefined

    constructor() { }

    get() {
        console.log('url: ', this.url);
    }
}

const http4 = new HttpClient4();
http4.get()


console.log('------------------------------------------------------------------');
console.log('------------------------------------------------------------------');

// 3 方法装饰器
// 会被应用到方法的属性描述符上，可以用来监视、修改或者替换方法定义
// 方法装饰器在运行时传入下列3个参数：
//  1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
//  2、成员的名字。
//  3、成员的属性描述符。

function logParams(params: any) {

    // params 方法装饰器传入的参数

    return function (target: any, methodName: any, paramsIndex: any) {

        console.log('params（方法装饰器传入的参数）: ', params);
        console.log('target（使用方法装饰器的类）: ', target);
        console.log('methodName(使用方法装饰器的类的方法名): ', methodName);
        console.log('paramsIndex: ', paramsIndex);

        target.url = params;
    }
}


class HttpClient5 {

    public url: any | undefined;

    constructor() {

    }

    get(@logParams('ABC') uuid: any) {

        console.log('uuid: ', uuid);

    }
}

const http5 = new HttpClient5();
http5.get(123)
console.log('http5.url', http5.url);




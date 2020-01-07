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
function runFn(): string {
    return 'runfn()'
}

// 匿名函数
const runFn2 = function (): string {
    return 'runFn2()'
}

// 定义方法传参
function getInfo1(name: string, age: number): string {
    return `name: ${name}, age: ${age}`;
}
console.log(getInfo1('小明', 18))


// 无返回值
function runFn3() {
    console.log('runFn3()');
}


// 可选参数
function getInfo2(name: string, age?: number): string {
    if (age) {
        return `可选参数 --> name: ${name}, age: ${age}`;
    } else {
        return `可选参数 --> name: ${name}, age: 不详`;
    }
}
console.log(getInfo2('小红'));


// 默认参数
function getInfo3(name: string, age: number = 19): string {
    return `默认参数 --> name: ${name}, age: ${age}`;
}
console.log(getInfo3('小花'));
console.log(getInfo3('小花', 20));


// 剩余参数
function sum1(a: number, b: number, c: number, d: number): number {
    return a + b + c + d;
}
console.log('sum1(1, 2, 3, 4) --> ', sum1(1, 2, 3, 4));

/* 三点运算符，接收形参传过来的值 */
function sum2(...result: number[]): number {
    let sum: number = 0;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log('sum2(1, 2, 3, 4) --> ', sum2(1, 2, 3, 4));
console.log('sum2(1, 2, 3, 4, 5, 6, 7, 8) --> ', sum2(1, 2, 3, 4, 5, 6, 7, 8));



function sum3(a: number, b: number, ...result: number[]): number {
    let sum: number = a + b;
    for (let i = 0; i < result.length; i++) {
        sum += result[i];
    }
    return sum;
}
console.log('sum3(1, 2, 3, 4, 5, 6) --> ', sum3(1, 2, 3, 4, 5, 6));
console.log('sum3(1, 2, 3, 4, 5, 6, 7, 8) --> ', sum3(1, 2, 3, 4, 5, 6, 7, 8));


// TS函数重载
// java中方法的重载：重载指的是两个或者两个以上同名函数，但它们的参数不一样，这时会出现函数重载的情况。
// typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
// ts为了兼容es5 以及 es6 重载的写法和java中有区别。

// es5中出现同名方法，下面的会替换上面的方法
/* 
    function css(config) {}
    function css(config, value) {} 
*/

// TS中的函数重载
function getUserInfo(name: string): string;
function getUserInfo(age: number): string;
function getUserInfo(argument: any): any {
    if (typeof argument === 'string') {
        return '我叫：' + argument;
    } else {
        return '我的年龄是：' + argument;
    }
}
console.log('TS函数重载 --> ', getUserInfo('李白'));
console.log('TS函数重载 --> ', getUserInfo(108));
// console.log('TS函数重载 --> ', getUserInfo(true)); // 错误

function getUserInfo2(name: string): string;
function getUserInfo2(name: string, age?: number): string;
function getUserInfo2(name: any, age?: any): any {
    if (age) {
        return `名字：${name}，年龄：${age}`
    } else {
        return `名字：${name}`
    }
}
console.log('TS函数重载 --> getUserInfo2() ', getUserInfo2('小晴'));
console.log('TS函数重载 --> getUserInfo2() ', getUserInfo2('小晴', 11));


// 箭头函数 ES6 （箭头函数里面的this指向上下文）

setTimeout(function () { 
    // console.log(this); 
    console.log('es5函数'); 

}, 1000);

setTimeout(() => {
    // console.log(this)
    console.log('箭头函数');
}, 1000);
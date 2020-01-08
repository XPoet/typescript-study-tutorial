"use strict";
/* TypeScript 泛型 */
/**
 * 泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
 * 组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
 * 在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。
 * 这样用户就可以以自己的数据类型来使用组件。
 * 通俗理解：泛型就是解决 类 接口 方法的复用性、以及对不特定数据类型的支持(类型校验)
 */
// 只能返回string类型的数据
function getData0(value) {
    return value;
}
// 同时返回 string类型 和number类型  （代码冗余）
function getData1(value) {
    return value;
}
function getData2(value) {
    return value;
}
// 同时返回 string类型 和number类型 any类型 可以解决这个问题
// any放弃了类型检查,传入什么 返回什么。比如：传入number类型必须返回number类型，传入string类型必须返回string类型
function getData3(value) {
    return '哈哈哈';
}
getData3(123);
getData3('123');
// 泛型：可以支持不特定的数据类型   要求：传入的参数和返回的参数一致
// T 表示泛型，具体什么类型是由调用这个方法的时候决定的
function getData(value) {
    return value;
}
console.log(getData(123456));
// console.log(getData<string>(123456)); // 报错
console.log(getData('123456'));
// 泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串 a - z两种类型。通过类的泛型来实现。
var Min = /** @class */ (function () {
    function Min() {
        this.list = [];
    }
    Min.prototype.add = function (num) {
        this.list.push(num);
    };
    Min.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return Min;
}());
var m = new Min();
m.add(2);
m.add(4);
m.add(6);
m.add(8);
console.log(m.min());
// 类的泛型
var Min2 = /** @class */ (function () {
    function Min2() {
        this.list = [];
    }
    Min2.prototype.add = function (value) {
        this.list.push(value);
    };
    Min2.prototype.min = function () {
        var minValue = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minValue > this.list[i])
                minValue = this.list[i];
        }
        return minValue;
    };
    return Min2;
}());
// 实例化类，并且制定了类的T代表的类型是number
var m2 = new Min2();
m2.add(1);
m2.add(3);
m2.add(5);
console.log(m2.min());
// 实例化类，并且制定了类的T代表的类型是number
var m3 = new Min2();
m3.add('a');
m3.add('b');
m3.add('c');
console.log(m3.min());
// 把类作为参数来约束数据传入的类型 
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var MySQLDB = /** @class */ (function () {
    function MySQLDB() {
    }
    MySQLDB.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MySQLDB;
}());
var u1 = new User();
u1.username = 'user1';
u1.password = 'pwd1';
var mysqldb1 = new MySQLDB();
mysqldb1.add(u1);
var ArticleCate = /** @class */ (function () {
    function ArticleCate() {
    }
    return ArticleCate;
}());
// 定义操作数据库的泛型类
var MySQLDB2 = /** @class */ (function () {
    function MySQLDB2() {
    }
    MySQLDB2.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MySQLDB2.prototype.updated = function (info, id) {
        console.log(info);
        console.log(id);
        return true;
    };
    return MySQLDB2;
}());
var ArticleCate2 = /** @class */ (function () {
    function ArticleCate2(params) {
        this.title = params.title;
        this.desc = params.desc;
    }
    return ArticleCate2;
}());
var a = new ArticleCate2({ title: 't1', desc: 'd1' });
a.status = 0;
var mysqldb2 = new MySQLDB2();
mysqldb2.updated(a, 1);

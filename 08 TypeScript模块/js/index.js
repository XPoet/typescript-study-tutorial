"use strict";
/*
模块的的概念（官方）:

    关于术语的一点说明: 请务必注意一点，TypeScript 1.5里术语名已经发生了变化。 “内部模块”现在称做“命名空间”。
    “外部模块”现在则简称为“模块” 模块在其自身的作用域里执行，而不是在全局作用域里；
    这意味着定义在一个模块里的变量，函数，类等等在模块外部是不可见的，除非你明确地使用export形式之一导出它们。
    相反，如果想使用其它模块导出的变量，函数，类，接口等的时候，你必须要导入它们，可以使用 import形式之一。

模块的概念（自己理解）：

    我们可以把一些公共的功能单独抽离成一个文件作为一个模块。
    模块里面的变量 函数 类等默认是私有的，如果我们要在外部访问模块里面的数据（变量、函数、类），
    我们需要通过export暴露模块里面的数据（变量、函数、类...）。
    暴露后我们通过 import 引入模块就可以使用模块里面暴露的数据（变量、函数、类...）。

*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./modules/db");
console.log(db_1.getData());
console.log(db_1.saveData());
console.log(db_1.url);
var db2_1 = __importDefault(require("./modules/db2"));
console.log(db2_1.default());
var mysql_1 = require("./model/mysql");
var user_1 = require("./model/user");
var mysql = new mysql_1.MySQL();
var u = new user_1.User();
u.username = '小兰';
u.password = 'abc';
mysql.add(u);

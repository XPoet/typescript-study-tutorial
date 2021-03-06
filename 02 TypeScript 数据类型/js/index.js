"use strict";
/**
 * TypeScript中的数据类型:
 * typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型
 * 布尔类型（boolean）
 * 数字类型（number）
 * 字符串类型(string)
 * 数组类型（array）
 * 元组类型（tuple）
 * 枚举类型（enum）
 * 任意类型（any）
 * null 和 undefined
 * void类型
 * never类型
 */
// 布尔类型（boolean）
var flag = true;
console.log(flag);
// 数字类型（number）
var num = 123;
console.log(num);
// 字符串类型(string)
var str = 'hello';
console.log(str);
// 数组类型（array），ts中定义数组有两种方式
// 1. 第一种定义数组的方式
var arr1 = [1, 2, 3];
console.log(arr1);
// 2.第二种定义数组的方式
var arr2 = [4, 5, 6];
console.log(arr2);
// 元组类型（tuple），属于数组的一种
var arr3 = [123, 'hello'];
console.log(arr3);
// 枚举类型（enum）
/*
    随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。
    例如：性别、月份、星期几、颜色、单位名、学历、职业等，都不是数值数据。
    在其它程序设计语言中，一般用一个数值来代表某一状态，这种处理方法不直观，易读性差。
    如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
    也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值，
    这种方法称为枚举方法，用这种方法定义的类型称枚举类型。
        
            enum 枚举名{
                标识符[=整型常数],
                标识符[=整型常数],
                ...
                标识符[=整型常数],
            } ;

 */
var enum1;
(function (enum1) {
    enum1[enum1["red"] = 0] = "red";
    enum1[enum1["blue"] = 1] = "blue";
    enum1[enum1["green"] = 2] = "green";
})(enum1 || (enum1 = {}));
var e1 = enum1.red;
console.log(e1);
var enum2;
(function (enum2) {
    enum2["success"] = "success";
    enum2["error"] = "error";
})(enum2 || (enum2 = {}));
var e2 = enum2.success;
console.log(e2);
// 任意类型（any）
var any1 = 123;
var any2 = '123';
// null 和 undefined
// void类型 typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
// never类型:是其他类型 （包括 null 和 undefined）的子类型，代表从不会出现的值。这意味着声明never的变量只能被never类型所赋值。

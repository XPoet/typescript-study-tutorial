"use strict";
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
/* 1、TS类的定义 */
var Person = /** @class */ (function () {
    //构造函数，实例化类的时候触发的方法
    function Person(name) {
        this.name = name;
    }
    Person.prototype.run = function () {
        console.log(this.name + 'run...');
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var p = new Person('小丽');
p.run();
console.log(p.getName());
/* 2、TS 中实现类的继承 extends super */
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name) {
        return _super.call(this, name) || this;
    }
    return Man;
}(Person));
var m = new Man('小灰');
m.run();
// TS 中继承的探讨，父类的方法和子类的方法一致
var Woman = /** @class */ (function (_super) {
    __extends(Woman, _super);
    function Woman(name) {
        return _super.call(this, name) || this;
    }
    Woman.prototype.run = function () {
        return this.name + "run... (\u5B50\u7C7B)";
    };
    Woman.prototype.work = function () {
        console.log(this.name + 'work...');
    };
    return Woman;
}(Person));
var w = new Woman('小菲');
console.log(w.run());
/* 3、类里面的修饰符，typescript里面定义属性的时候给我们提供了三种修饰符 */
/*
    public：公有            在当前类里面、 子类  、类外面都可以访问
    protected：保护类型      在当前类里面、子类里面可以访问 ，在类外部没法访问
    private：私有           在当前类里面可以访问，子类、类外部都没法访问
    属性如果不加修饰符 默认就是 公有 （public）
*/
var Person2 = /** @class */ (function () {
    function Person2(name, age, tel) {
        this.name = name;
        this.age = age;
        this.tel = tel;
    }
    Person2.prototype.run = function () {
        console.log(this.name + 'run....');
    };
    Person2.prototype.getName = function () {
        return this.name;
    };
    Person2.prototype.getAge = function () {
        return this.age;
    };
    Person2.prototype.getTel = function () {
        return this.tel;
    };
    return Person2;
}());
var p2 = new Person2('小冰', 18, 110);
p2.run();
var Man2 = /** @class */ (function (_super) {
    __extends(Man2, _super);
    function Man2(name, age, tel) {
        return _super.call(this, name, age, tel) || this;
    }
    return Man2;
}(Person2));
var m2 = new Man2('小娜', 10, 119);
console.log(m2.getName());
/* TS 类里面的静态属性，静态方法 */
var Person3 = /** @class */ (function () {
    function Person3(name) {
        this.name = name;
    }
    Person3.prototype.work = function () {
        console.log(this.name + 'work....');
    };
    Person3.print = function () {
        console.log('print() sex', Person3.sex, this.sex);
    };
    Person3.sex = '男'; // 静态属性，可以不用new，直接Person3.sex
    return Person3;
}());
var p3 = new Person3('小龙');
p3.work();
Person3.print();
/* 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现 */
// 多态属于继承
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log('eat method');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.eat = function () {
        return this.name + '吃肉！';
    };
    return Dog;
}(Animal));
/* TS 抽象类：提供其他类继承的基类，不能直接被实例化。 */
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
// abstract 抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准  例：标准：Animal 这个类要求它的子类必须包含eat方法
var Animal2 = /** @class */ (function () {
    function Animal2(name) {
        this.name = name;
    }
    Animal2.prototype.run = function () {
        console.log('其他方法可以不实现！');
    };
    return Animal2;
}());
// const a2 = new Animal2('');  // 错误，无法创建抽象类的实例
var Dog2 = /** @class */ (function (_super) {
    __extends(Dog2, _super);
    function Dog2(name) {
        return _super.call(this, name) || this;
    }
    Dog2.prototype.eat = function () {
        console.log(this.name + '吃菜！');
    };
    return Dog2;
}(Animal2));
var d2 = new Dog2('金毛狗');
d2.eat();
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.eat = function () {
        console.log(this.name + '吃鱼！');
    };
    return Cat;
}(Animal2));
var c = new Cat('小猫咪');
c.eat();

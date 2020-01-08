/* 1、TS类的定义 */
class Person {

    name: string;

    //构造函数，实例化类的时候触发的方法
    constructor(name: string) {
        this.name = name;
    }

    run(): void {
        console.log(this.name + 'run...');
    }

    getName(): string {
        return this.name;

    }
}

const p = new Person('小丽');
p.run();
console.log(p.getName());

/* 2、TS 中实现类的继承 extends super */
class Man extends Person {

    constructor(name: string) {
        super(name);  // 初始化父类的构造函数
    }

}

const m = new Man('小灰');
m.run();

// TS 中继承的探讨，父类的方法和子类的方法一致
class Woman extends Person {

    constructor(name: string) {
        super(name);  // 初始化父类的构造函数
    }

    run(): string {
        return `${this.name}run... (子类)`
    }

    work(): void {
        console.log(this.name + 'work...');
    }

}

const w = new Woman('小菲');
console.log(w.run());


/* 3、类里面的修饰符，typescript里面定义属性的时候给我们提供了三种修饰符 */
/*
    public：公有            在当前类里面、 子类  、类外面都可以访问
    protected：保护类型      在当前类里面、子类里面可以访问 ，在类外部没法访问
    private：私有           在当前类里面可以访问，子类、类外部都没法访问
    属性如果不加修饰符 默认就是 公有 （public）
*/

class Person2 {
    public name: string;  // 公有属性
    private age: number;  // 私有属性
    protected tel: number; // 保护类型

    constructor(name: string, age: number, tel: number) {
        this.name = name;
        this.age = age;
        this.tel = tel;
    }

    run() {
        console.log(this.name + 'run....');
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getTel(): number {
        return this.tel;
    }
}

const p2 = new Person2('小冰', 18, 110);
p2.run()

class Man2 extends Person2 {

    constructor(name: string, age: number, tel: number) {
        super(name, age, tel)
    }
}

const m2 = new Man2('小娜', 10, 119);
console.log(m2.getName());



/* TS 类里面的静态属性，静态方法 */
class Person3 {
    public name: string;
    static sex: string = '男';  // 静态属性，可以不用new，直接Person3.sex

    constructor(name: string) {
        this.name = name;
    }

    work() {
        console.log(this.name + 'work....');
    }

    static print() {  // 静态方法，里面没法直接调用类里面的属性
        console.log('print() sex', Person3.sex, this.sex);
    }

}

const p3 = new Person3('小龙');
p3.work();
Person3.print();


/* 多态：父类定义一个方法不去实现，让继承它的子类去实现，每一个子类有不同的表现 */
// 多态属于继承
class Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat() { // 具体吃什么，不知道，由继承它的子类去实现，每个子类的表现不一样
        console.log('eat method');
    }

}

class Dog extends Animal {

    constructor(name: string) {
        super(name);
    }

    eat(): string {
        return this.name + '吃肉！'
    }

}




/* TS 抽象类：提供其他类继承的基类，不能直接被实例化。 */
// 用 abstract 关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
// abstract 抽象方法只能放在抽象类里面
// 抽象类和抽象方法用来定义标准  例：标准：Animal 这个类要求它的子类必须包含eat方法
abstract class Animal2 {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract eat(): any  // 抽象方法不包含具体实现并且必须在派生类中实现。

    run(): void {
        console.log('其他方法可以不实现！');
    }
}

// const a2 = new Animal2('');  // 错误，无法创建抽象类的实例

class Dog2 extends Animal2 {
    constructor(name: string) {
        super(name)
    }

    eat() {
        console.log(this.name + '吃菜！');
    }
}

const d2 = new Dog2('金毛狗')
d2.eat();

class Cat extends Animal2 {


    constructor(name: string) {
        super(name)
    }

    eat() {
        console.log(this.name + '吃鱼！');
    }

}

const c = new Cat('小猫咪')
c.eat();
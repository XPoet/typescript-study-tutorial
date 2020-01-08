/*
接口的作用：在面向对象的编程中，接口是一种规范的定义，
它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。

接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，
也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 

typescrip中的接口类似于java，同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
*/

// 1、属性接口，对json的约束
function printLabel(labelInfo: { label: string }): void {
    console.log('labelInfo: ' + labelInfo.label);
}

printLabel({ label: 'AA' });

// 接口：行为和动作的规范，对批量方法进行约束
interface Person {
    name: string;
    age: number;
}

function printPerson(person: Person): void {
    console.log('Person:name', person.name);
    console.log('Person:age', person.age);
}

printPerson({ name: 'BB', age: 19 })

// 可选属性
interface Person2 {
    name: string;
    age: number;
    sex?: string;  // 可选属性
}


// 加密的函数类型接口
interface Encrypt {
    (key: string, value: string): string
}

const md5: Encrypt = function (key: string, value: string): string {
    return key + value
}

console.log(md5('123', 'ABC'));


// 可索引接口：数组、对象的约束（不常用）
// 对数组的约束
interface UserArray {
    [index: number]: string
}

const array1: UserArray = ['aaa', 'bbb', 'ccc']
// const array2: UserArray = [123, 'aaa'];         // 错误

// 对对象的约束
interface UserObject {
    [index: string]: string
}

const object1: UserObject = {
    name: 'ZXC'
}

// const object2: UserObject = {
//     name: 123  // 错误
// }


// 类类型接口，对类的约束，跟抽象类有点相似
interface Animal {
    name: string;
    eat(food: string): void;
}

class Dog implements Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(this.name + '吃粮食！');
    }
}

const d = new Dog('拉布拉多');
d.eat()

class Cat implements Animal {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat(food: string) {
        console.log(this.name + '吃' + food);
    }
}

const c = new Cat('小花猫')
c.eat('鱼干')



// 接口扩展：接口可以继承接口
interface Animal2 {
    eat(): void;
}

interface Dog2 extends Animal2 {
    run(): void;
}

class SmallDog implements Dog2 {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    eat() {
        console.log(this.name + '吃骨头');
    }

    run() {
        console.log(this.name + '在奔跑🏃');
    }

    cry() {
        console.log(this.name + '汪汪叫');
    }


}

const sd = new SmallDog('小二哈')
sd.eat()
sd.run()
sd.cry()




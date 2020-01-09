/**
 * 功能：定义一个操作数据库的库，支持MySQL、SQLServer、MongoDB
 * 要求：都有add、update、delete、get方法
 * 注意：约束统一的规范，代码复用
 * 解决方案：需要约束规范，所以要用到接口，需要代码复用，所以用到泛型
 * 1. 接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范
 * 2. 泛型：通俗理解泛型就是解决类、接口、方法的复用性
 */

interface DB<T> {
    add(info: T): boolean;
    update(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}



// MongoDB
class MongoDB<T> implements DB<T> {

    constructor() {

    }

    add(info: T): boolean {
        console.log('add...');
        return true
    }

    update(info: T, id: number): boolean {
        console.log('update...');
        return true
    }

    delete(id: number) {
        console.log('delete...');
        return true
    }


    get(id: number) {
        console.log('get...');

        const list = [
            {
                name: 'AA',
                age: 10
            },
            {
                name: 'BB',
                age: 11
            }
        ]

        return list
    }

}


// MySQL
class MySQL<T> implements DB<T> {

    constructor() {

    }

    add(info: T): boolean {
        console.log('add...');
        return true
    }

    update(info: T, id: number): boolean {
        console.log('update...');
        return true
    }

    delete(id: number) {
        console.log('delete...');
        return true
    }


    get(id: number) {
        console.log('get...');

        const list = [
            {
                name: 'AA',
                age: 10
            },
            {
                name: 'BB',
                age: 11
            }
        ]

        return list
    }

}


class User {
    username: string | undefined;
    password: string | undefined;
}

const u = new User();
u.username = 'ASD'
u.password = '1234567'

const mongodb = new MongoDB();
mongodb.add(u)